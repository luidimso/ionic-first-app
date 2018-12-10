import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListPage } from './list';

@NgModule({
  imports: [
    IonicPageModule.forChild(ListPage),
  ],
  declarations: [
    ListPage,
  ],
})
export class ListModule {  }
