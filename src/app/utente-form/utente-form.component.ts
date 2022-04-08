import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utente } from '../model/utente';
import { utenteResponse } from '../model/utenteResponse';
import { UtenteService } from '../service/utente.service';

@Component({
  selector: 'app-utente-form',
  templateUrl: './utente-form.component.html',
  styleUrls: ['./utente-form.component.css']
})
export class UtenteFormComponent implements OnInit {


  utente: Utente;
  respon: string | undefined;
  response: utenteResponse;

  errorMessage: string | undefined;
  loading: boolean = false;
  step2: boolean = false;


  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private utenteService: UtenteService
  ) { 
    this.utente = new Utente();
    this.response = new utenteResponse();
  }

  public salvaUtente(){
    // controllo che le 2 psw coincidano
    if(this.utente.psw != this.utente.confermapsw){
            this.errorMessage = "password non coincidono";
            this.step2=false;
            return;
        }

    this.respon = "";
    this.utenteService.newSave(this.utente).subscribe(responseData=>{
      console.log('response data', responseData)
      this.response =responseData;
      
      if(responseData.respon == "Utente inserito correttamente"){
        this.step2 = true;
      }else{
          console.log('errore', responseData)
          this.errorMessage = responseData.respon;
          this.step2=false;
      }
    }, error=>{
      console.log('errore', error)
      this.errorMessage = error;
      this.step2=false;
    })

  }

  gotoStep2() {
    this.router.navigate(['/step2']);
  }

  ngOnInit(): void {
  }

}
