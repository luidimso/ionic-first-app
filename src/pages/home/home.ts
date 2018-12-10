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
    this.navCtrl.push(ContactPage, {
      type: 'push',
      course: 'Sistemas de Informação',
      year: '2018',
      message: () => {
        alert("Bacharelado em Sistemas de Informação");
      }
    });
  }

  setRoot(): void{
    this.navCtrl.setRoot(ContactPage, {
      type: 'setRoot'
    });
  }
}
