import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sonuc } from 'src/app/models/sonuc';
import { FbServisService } from 'src/app/services/fbServis.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
sonuc: Sonuc = new Sonuc();
  constructor(
    public fbServis:FbServisService,
    public router: Router
  ) { }

  ngOnInit() {
  }
GirisYap(mail:string,parola:string){
this.fbServis.OturumAc(mail, parola).then(d => {
if(d.user){
  localStorage.setItem("user",JSON.stringify(d.user));
  this.router.navigate(['/'])
}
},err => {
this.sonuc.islem = false;
this.sonuc.mesaj = "E-Posta adresi veya Parola Geçersiz";
});
}
}
