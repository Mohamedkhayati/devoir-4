import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SupplementsComponent } from './supplements/supplements.component';
import { AddSupplementComponent } from './add-supplement/add-supplement.component';
import { FormsModule } from '@angular/forms';
import { UpdateSupplementComponent } from './update-supplement/update-supplement.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { RechercheParNutritionalComponent } from './recherche-par-nutritional/recherche-par-nutritional.component';


@NgModule({
  
  declarations: [
    AppComponent,
    SupplementsComponent,
    AddSupplementComponent,
    UpdateSupplementComponent,
    RechercheParNutritionalComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    RouterModule,
    BrowserModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
export class YourModule { }

