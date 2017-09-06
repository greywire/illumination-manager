import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CandlePage } from './candle';

@NgModule({
  declarations: [
    CandlePage,
  ],
  imports: [
    IonicPageModule.forChild(CandlePage),
  ],
})
export class CandlePageModule {}
