import { KayitlarComponent } from './components/kayitlar/kayitlar.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {AngularFireAuthGuard,redirectUnauthorizedTo} from '@angular/fire/auth-guard'
import { RegisterComponent } from './components/register/register.component';
import { AnasayfaComponent } from './components/anasayfa/anasayfa.component';
import { SepetComponent } from './components/sepet/sepet.component';

import { IletisimComponent } from './components/iletisim/iletisim.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

const redirectLogin=()=>redirectUnauthorizedTo(['/login'])
const routes: Routes = [

  { path: 'admin', 
  component:
  HomeComponent,
  canActivate:[AngularFireAuthGuard],
  data:{
authGuardPipe:redirectLogin
  }
},
  { path: 'kayitlar',
   component:
   KayitlarComponent,
   
   canActivate:[AngularFireAuthGuard],
   data:{
 authGuardPipe:redirectLogin  },
   },

  { path: 'login', component:LoginComponent},
  { path: 'register', component:RegisterComponent},
  { path: '', component:AnasayfaComponent ,
   
  canActivate:[AngularFireAuthGuard],
  data:{
authGuardPipe:redirectLogin  },
  },
  { path: 'sepet', component:SepetComponent ,
   
  canActivate:[AngularFireAuthGuard],
  data:{
authGuardPipe:redirectLogin  },
  },

  { path: 'iletisim', component:IletisimComponent ,
   
  canActivate:[AngularFireAuthGuard],
  data:{
authGuardPipe:redirectLogin  },
  },

  { path: 'checkout', component:CheckoutComponent ,
   
  canActivate:[AngularFireAuthGuard],
  data:{
authGuardPipe:redirectLogin  },

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
