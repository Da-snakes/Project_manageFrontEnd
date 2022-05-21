import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjetsComponent } from './projets/projets.component';
import { AddProjetComponent } from './add-projet/add-projet.component';
import { UpdateProjetComponent } from './update-projet/update-projet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ProjetsComponent,
    AddProjetComponent,
    UpdateProjetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    //Data Binding From VIEW To MODULE
    FormsModule,
    //Spring Boot API REST
    HttpClientModule,
    ////////////////////
    ReactiveFormsModule,
    
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
