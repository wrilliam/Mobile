import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EsportePage } from './esporte';

@NgModule({
  declarations: [
    EsportePage,
  ],
  imports: [
    IonicPageModule.forChild(EsportePage),
  ],
})
export class EsportePageModule {}
