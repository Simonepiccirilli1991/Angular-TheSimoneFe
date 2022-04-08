import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginUtente } from '../model/loginModel';
import { visualizza } from '../model/visualizzaDati';
import { UtenteService } from '../service/utente.service';

@Component({
  selector: 'app-display-dati',
  templateUrl: './display-dati.component.html',
  styleUrls: ['./display-dati.component.css']
})
export class DisplayDatiComponent implements OnInit {

  visualizzare!:visualizza;
  username!: string;
  vedi: boolean = false;
  errorMsg!: string;
  utenteLogin: LoginUtente;

  constructor(private route: ActivatedRoute,
     private utenteService: UtenteService) { 
       this.visualizzare = new visualizza();
       this.utenteLogin = new LoginUtente();
     }

     public getUtente(){

      this.utenteService.findAll(this.username).subscribe(responseData =>{
        this.visualizzare = responseData;
        if(this.visualizzare.error == false){
          this.vedi = true;
        }else{
          this.errorMsg = " Errore, si prega di riprovare tra poco"
        }
      }
        )
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{
      this.username = params.username;
    })
    
  }

  ngClick(){
    this.utenteLogin.username = this.username;
    this.utenteService.getInfo2(this.utenteLogin).subscribe(responseData =>{
      this.visualizzare = responseData;
      if(this.visualizzare.error == false){
        this.vedi = true;
      }else{
        this.errorMsg = " Errore, si prega di riprovare tra poco"
      }
    }
      )
  }
 

}
