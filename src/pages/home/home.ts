import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { ConfigPage } from './../config/config';

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

  onPush(): void{
    this.navCtrl.push(ConfigPage);
  }
}
