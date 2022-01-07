import { Kayit } from './../models/kayit';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import{AngularFireAuth} from '@angular/fire/auth'
import { Uye } from '../models/uye';
import { Sepet } from '../models/sepet';


@Injectable({
  providedIn: 'root'
})
export class FbServisService {


private dbKayit = '/Kayitlar';
private dbUye ='/Uyeler';
private dbSepet ='/Sepetler';

   kayitRef: AngularFireList<Kayit> | any = null;
   uyeRef: AngularFireList<Uye> = null;
   sepetRef: AngularFireList<Sepet> | any = null ;
   


  constructor(
    public db: AngularFireDatabase,
    public afAuth:AngularFireAuth
    ){
      this.kayitRef = db.list(this.dbKayit);
      this.uyeRef = db.list (this.dbUye);
      this.sepetRef = db.list (this.dbSepet);
    }

    UyeListele(){
      return this.uyeRef;
    }

OturumAc(mail:string, parola: string){
return this.afAuth.signInWithEmailAndPassword(mail, parola);
}

OturumKapat(){
return this.afAuth.signOut();
}

OturumKontrol(){
  if (localStorage.getItem("user")){
    return true;
  }else{
    return false;
  }
}

UyeOl(uye:Uye){
  return this.afAuth.createUserWithEmailAndPassword(uye.mail, uye.parola);
}

UyeEkle(uye:Uye){
  return this.uyeRef.push(uye);
}
 /*sepet*/
SepetListele(){
  return this.sepetRef;
}

SepeteEkle(sepet: Sepet){
  return this.sepetRef.push(sepet);
}
SepetSil(key: string){
  return this.sepetRef.remove(key);
}



    /* kayıtlar firebase servis başlangıç */


    KayitListele(){
      return this.kayitRef;
    }

    KayitEkle(kayit: Kayit){
      return this.kayitRef.push(kayit);
    }

    KayitDuzenle(kayit: Kayit){
      return this.kayitRef.update(kayit.key, kayit);
    }

    KayitSil(key: string){
      return this.kayitRef.remove(key);
    }

    
/* kayıtlar firebase servis bitiş */


 

}
