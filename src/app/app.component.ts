import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FbServisService } from './services/fbServis.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hafta10';
  constructor(
    public servis: FbServisService,
    public fbServis: FbServisService,
    public router:Router
  ) { }




  OturumKapat(){
    this.fbServis.OturumKapat().then(() => {
      localStorage.removeItem("user");
      this.router.navigate(['/login']);
    });
  }



}
