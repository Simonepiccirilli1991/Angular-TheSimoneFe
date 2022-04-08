import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
import { Utente } from '../model/utente';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl: string;


  constructor(private http: HttpClient) { 
    this.loginUrl = 'http://localhost:8082/seor/login/utente';
  }


  public login(utente: Utente){
    
    return this.http.post<boolean>(this.loginUrl,utente).pipe(retry(1))
  }

  
}
