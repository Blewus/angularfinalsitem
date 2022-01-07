import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Kayit } from 'src/app/models/kayit';
import { Sepet } from 'src/app/models/sepet';
import { Sonuc } from 'src/app/models/sonuc';
import { FbServisService } from 'src/app/services/fbServis.service';

@Component({
  selector: 'app-sepet',
  templateUrl: './sepet.component.html',
  styleUrls: ['./sepet.component.css']
})
export class SepetComponent implements OnInit {
  kayitlar: any;
  secKayit: Kayit= new Kayit();
  sonuc: Sonuc = new Sonuc();
  secSepet: Sepet= new Sepet();
  sepetler: any;
  

  constructor(
    public fbServis: FbServisService
  ) { }

  ngOnInit() {
    this.SepetListele();
    this.KayitListele();
    this.secKayit.key = null;
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


  KayitSil(kayit:Kayit){
    this.fbServis.KayitSil(kayit.key).then(()=>{
      this.sonuc.islem = true;
        this.sonuc.mesaj = "Ürün Silindi";
    });
  }

  SepetSil(sepet:Sepet){
    this.fbServis.SepetSil(sepet.key).then(()=>{
      this.sonuc.islem = true;
        this.sonuc.mesaj = "Sepetten Kaldırıldı";
    });
  }

  SepeteKaydet(){
    var tarih = new Date();
 console.log(this.secSepet)
    if (this.secSepet.key==null) {
     
      this.fbServis.SepeteEkle(this.secSepet).then(()=> {
        this.sonuc.islem = true;
        this.sonuc.mesaj = "Sepete eklendi.";
      });
    } 
  }
  
  SepetListele(){
    this.fbServis.SepetListele().snapshotChanges().pipe(
      map((changes : any) =>
        changes.map((c : any) => 
            ({ key: c.payload.key, ...c.payload.val() })
          )
        )
    ).subscribe((data : any) => {
      this.sepetler = data;
    })
  }
}
