import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { ContactPage } from './../contact/contact';

@IonicPage({
  priority: 'high';
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  pushPage(): void{
    this.navCtrl.push(ContactPage);
  }

  setRoot(): void{
    this.navCtrl.setRoot(ContactPage);
  }
}
