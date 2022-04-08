import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtenteFormComponent } from './utente-form/utente-form.component';
import { AnagraficaFormComponent } from './anagrafica-form/anagrafica-form.component';
import { DisplayDatiComponent } from './display-dati/display-dati.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginFormComponent } from './login-form/login-form.component';
import { DemoInfoComponent } from './demo-info/demo-info.component';

@NgModule({
  declarations: [
    AppComponent,
    UtenteFormComponent,
    AnagraficaFormComponent,
    DisplayDatiComponent,
    LoginFormComponent,
    DemoInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
