import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utente } from '../model/utente';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  utente : Utente;
  username!: Utente["username"];
  psw!: Utente["psw"];
  
  response: boolean = false;

  errorMessage: string | undefined;
  accesso: boolean = false;
  responseS! : string;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private loginService: LoginService
  ) { 
    this.utente = new Utente();
    this.username = new Utente().username;
    this.psw = new Utente().psw;
  }


  public loginUtente(){
    this.loginService.login(this.utente).subscribe(responseData=>{
      console.log('response data', responseData)
      this.response =responseData;
      
      if(this.response != false){
        this.accesso = true;
        this.responseS = "Login Eseguito con successo"
      }else{
          console.log('errore', responseData)
          this.errorMessage = "Errore durante il login";
          
      }
    }, error=>{
      console.log('errore', error)
      this.errorMessage = error;
      
    })

  }

  ngOnInit(): void {
  }

}
