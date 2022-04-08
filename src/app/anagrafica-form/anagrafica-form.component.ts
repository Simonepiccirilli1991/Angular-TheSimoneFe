import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Anagrafica } from '../model/anagrafica';
import { AnagraficaService } from '../service/anagrafica.service';
import { UtenteService } from '../service/utente.service';

@Component({
  selector: 'app-anagrafica-form',
  templateUrl: './anagrafica-form.component.html',
  styleUrls: ['./anagrafica-form.component.css']
})
export class AnagraficaFormComponent implements OnInit {


  anagrafica: Anagrafica;
  respon: string | undefined;

  errorMessage: string | undefined;
  loading: boolean = false;
  step3: boolean = false;
  username!: string;

  

  constructor(private route: ActivatedRoute, 
    private router: Router, 
      private anagraficaService: AnagraficaService) { 
        this.anagrafica = new Anagrafica();
      }


      public salvaAnagrafica(){
        this.respon = "";
        this.anagraficaService.saveAnagrafica(this.anagrafica,this.username).subscribe(responseData=>{
          console.log('response data', responseData)
          this.respon =responseData;
          if(this.respon == "Utente inserito con successo"){
            this.step3= true;
          }
          else{
            this.respon == "Errore, riprovare piu tardi"
          }

        }, error=>{
          console.log('errore', error)
          this.errorMessage = error;
          this.step3=false;
        })
    
      }
    
      gotoStep2() {
       // this.router.navigate(['/home'+this.username]);

        this.router.navigateByUrl("/accedi"+this.username);
      }


  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{
      this.username = params.username;
    })
  }

}
