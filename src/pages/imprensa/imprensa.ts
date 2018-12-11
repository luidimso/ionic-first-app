import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from './../home/home';

/**
 * Generated class for the ImprensaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-imprensa',
  templateUrl: 'imprensa.html',
})
export class ImprensaPage {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = HomePage;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImprensaPage');
  }

  salvarNoticia(t: string, s: string, n:string): void{
    let news = [{
      title: t,
      sub: s,
      new: n
    }];
    //this.storage.clear();

    this.storage.get('news').then((data) => {
      if (data != null){
       let d:any;
        d = JSON.parse(data);
        console.log(d);
        d.unshift(news[0]);
        this.storage.set('news', JSON.stringify(d));
        this.navCtrl.setRoot(HomePage);

        console.log(d);
      }
      	else {
          this.storage.set('news', JSON.stringify(news));
          console.log(news);
          this.navCtrl.setRoot(HomePage);
    }


  });

}
}
