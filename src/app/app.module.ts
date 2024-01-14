import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { FoglalasokComponent } from './foglalasok/foglalasok.component';
import { FoglalasComponent } from './foglalas/foglalas.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FoglalasokComponent,
    FoglalasComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
