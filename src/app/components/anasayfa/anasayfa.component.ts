import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Kayit } from 'src/app/models/kayit';
import { Sonuc } from 'src/app/models/sonuc';
import { FbServisService } from 'src/app/services/fbServis.service';

@Component({
  selector: 'app-anasayfa',
  templateUrl: './anasayfa.component.html',
  styleUrls: ['./anasayfa.component.css']
})
export class AnasayfaComponent implements OnInit {

  
  constructor(
    public fbServis: FbServisService
  ) { }

  ngOnInit() {
    
  }

  


  
}
