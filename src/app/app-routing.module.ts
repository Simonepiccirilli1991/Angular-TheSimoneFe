import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnagraficaFormComponent } from './anagrafica-form/anagrafica-form.component';
import { AppComponent } from './app.component';
import { DemoInfoComponent } from './demo-info/demo-info.component';
import { DisplayDatiComponent } from './display-dati/display-dati.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { UtenteFormComponent } from './utente-form/utente-form.component';

const routes: Routes = [

  {path: 'registrati', component:UtenteFormComponent},
  {path: 'visualizza', component:DisplayDatiComponent},
  {path: 'step2', component:AnagraficaFormComponent},
  {path: '', component:DemoInfoComponent},
  {path: 'home',component:AppComponent},
  {path: 'accedi',component: LoginFormComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
