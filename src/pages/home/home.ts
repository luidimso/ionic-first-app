import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { NoticiaPage } from './../noticia/noticia';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  news:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.storage.get('news').then((data) => {
      if (data != null){
        this.news = JSON.parse(data);
      }
      	else {
    }
    });
  }

  onNoticia(n): void{
    this.navCtrl.setRoot(NoticiaPage, {
      data: n
    });
  }
}
