import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Anagrafica } from '../model/anagrafica';
import { retry, catchError } from 'rxjs/operators';
import { Utente } from '../model/utente';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AnagraficaService {


  private anagraficaUrl: string;
  private username !: string ;

  
  
  constructor(private http: HttpClient, private router : ActivatedRoute) { 
    this.anagraficaUrl = 'http://localhost:8082/seor/inserisci/anagrafica/';
  }

  public saveAnagrafica(anagrafica: Anagrafica, username: String){
    const params = new HttpParams();
  params.append("utente","utente.username");
    return this.http.post(this.anagraficaUrl+ username,anagrafica,{responseType: 'text'}).pipe(retry(1))
  }

}


