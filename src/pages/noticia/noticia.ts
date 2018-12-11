import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NoticiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-noticia',
  templateUrl: 'noticia.html',
})
export class NoticiaPage {
  n:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.n = navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticiaPage');
  }

}
