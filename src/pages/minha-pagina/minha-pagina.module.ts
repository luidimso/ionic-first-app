import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MinhaPaginaPage } from './minha-pagina';

@NgModule({
  declarations: [
    MinhaPaginaPage,
  ],
  imports: [
    IonicPageModule.forChild(MinhaPaginaPage),
  ],
})
export class MinhaPaginaPageModule {}
