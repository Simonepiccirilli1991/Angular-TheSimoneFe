import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http'
import { Utente } from '../model/utente';
import { retry, catchError } from 'rxjs/operators';
import { Anagrafica } from '../model/anagrafica';
import { utenteResponse } from '../model/utenteResponse';
import { visualizza } from '../model/visualizzaDati';
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';
import { LoginUtente } from '../model/loginModel';

@Injectable({
  providedIn: 'root'
})
export class UtenteService {

  private utenteUrl: string;
  private anagraficaUrl: string;
  private getDatiUrl: string;
  infoUtente!: visualizza;


  constructor(private http: HttpClient) { 
    this.utenteUrl = 'http://localhost:8082/seor/inserisci/utente';
    this.anagraficaUrl = 'http://localhost:8082/seor/inserisci/anagrafica';
    this.getDatiUrl = 'http://localhost:8082/seor/get/infos';
    
  }

  public newSave(utente: Utente){
    const body = JSON.stringify(utente);
    return this.http.post<utenteResponse>(this.utenteUrl,utente).pipe(retry(1))
  }

  public saveAnagrafica(anagrafica: Anagrafica){
    return this.http.post(this.anagraficaUrl,anagrafica,{responseType: 'text'}).pipe(retry(1))
  }
  public getInfo(username: string) {
    return this.http.post<visualizza>(this.getDatiUrl,username,{ headers:new HttpHeaders()
      .set('Content-Type','application/json')});

  }

  public getInfo2(username: LoginUtente) {
    return this.http.post<visualizza>(this.getDatiUrl,username).pipe(retry(1))

  }

  public findAll(username: string): Observable<visualizza> {
    return this.http.get<visualizza>(this.getDatiUrl+username);
  }
}
