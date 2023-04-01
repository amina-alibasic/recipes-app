import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatTabsModule} from '@angular/material/tabs';
import { HomeComponent } from 'src/components/home/home.component';
import { NavbarComponent } from 'src/components/navbar/navbar.component';
import {MatCardModule} from '@angular/material/card';
import { RecipeCardComponent } from 'src/components/recipe-card/recipe-card.component';
import { BreakfastComponent } from 'src/components/breakfast/breakfast.component';
import { MaincourseComponent } from 'src/components/maincourse/maincourse.component';
import { DessertsComponent } from 'src/components/desserts/desserts.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,HomeComponent,NavbarComponent, RecipeCardComponent, BreakfastComponent,MaincourseComponent, DessertsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
