import { KayitlarComponent } from './components/kayitlar/kayitlar.component';
import { environment } from './../environments/environment';

import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule} from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AnasayfaComponent } from './components/anasayfa/anasayfa.component';
import { SepetComponent } from './components/sepet/sepet.component';
import {IletisimComponent} from './components/iletisim/iletisim.component';
import { CheckoutComponent } from './components/checkout/checkout.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    KayitlarComponent,
    RegisterComponent,
    AnasayfaComponent,
    SepetComponent,
    IletisimComponent,
    CheckoutComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
