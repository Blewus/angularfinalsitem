import { FbServisService } from './../../services/fbServis.service';
import { Sonuc } from './../../models/sonuc';
import { Kayit } from './../../models/kayit';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators'
import { Uye } from 'src/app/models/uye';
@Component({
  selector: 'app-kayitlar',
  templateUrl: './kayitlar.component.html',
  styleUrls: ['./kayitlar.component.css']
})
export class KayitlarComponent implements OnInit {
  uye?:Uye[];
  secUye:Uye= new Uye();
  kayitlar: any; 
  uyeler: any;
  secKayit: Kayit= new Kayit();
  sonuc: Sonuc = new Sonuc();
  
  

  constructor(
    public fbServis: FbServisService
  ) { }

  ngOnInit() {
    this.KayitListele();
    this.UyeListele();
    this.secKayit.key = null;
  }

  UyeListele(){
    this.fbServis.UyeListele().snapshotChanges().pipe(
      map((changes : any) =>
        changes.map((c : any) => 
            ({ key: c.payload.key, ...c.payload.val() })
          )
        )
    ).subscribe((data : any) => {
      this.uyeler = data;
    })
  }
 
    

  KayitListele(){
    this.fbServis.KayitListele().snapshotChanges().pipe(
      map((changes : any) =>
        changes.map((c : any) => 
            ({ key: c.payload.key, ...c.payload.val() })
          )
        )
    ).subscribe((data : any) => {
      this.kayitlar = data;
    })
  }

  KayitDuzenle(kayit:Kayit){
    Object.assign(this.secKayit, kayit);
  }

  KayitSil(kayit:Kayit){
    this.fbServis.KayitSil(kayit.key).then(()=>{
      this.sonuc.islem = true;
        this.sonuc.mesaj = "Kayıt Silindi.";
    });
  }

  Vazgec(){
    this.secKayit = new Kayit();
    this.secKayit.key = null;
  }

  Kaydet(){
    var tarih = new Date();
 
    if (this.secKayit.key==null) {
     
      this.fbServis.KayitEkle(this.secKayit).then(()=> {
        this.sonuc.islem = true;
        this.sonuc.mesaj = "Kayıt eklendi.";
      });
    } else{
      this.fbServis.KayitDuzenle(this.secKayit).then(() => {
        this.sonuc.islem = true;
        this.sonuc.mesaj = "Kayıt düzenlendi.";
      });
    }
  }
  

}
