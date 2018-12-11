import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { AboutPage } from './../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  news: [{
    title: string,
    sub: string,
    new: string
  }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.news = navParams.get('data');
  }

}
