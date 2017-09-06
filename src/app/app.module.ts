import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IlluminationManagerPage } from '../pages/illumination-manager/illumination-manager';
import { FlashlightPage } from '../pages/flashlight/flashlight';
import { ReadingPage } from '../pages/reading/reading';
import { DetectLightPage } from '../pages/detect-light/detect-light';
import { NightLightPage } from '../pages/night-light/night-light';
import { ColorOrganPage } from '../pages/color-organ/color-organ';
import { CountdownPage } from '../pages/countdown/countdown';
import { PresetPage } from '../pages/preset/preset';
import { SleepAndWakePage } from '../pages/sleep-and-wake/sleep-and-wake';
import { CandlePage } from '../pages/candle/candle';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BLE } from '@ionic-native/ble';
import { BackgroundMode } from '@ionic-native/background-mode';

@NgModule({
  declarations: [
    MyApp,
    IlluminationManagerPage,
    FlashlightPage,
    ReadingPage,
    DetectLightPage,
    NightLightPage,
    ColorOrganPage,
    CountdownPage,
    PresetPage,
    SleepAndWakePage,
    CandlePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IlluminationManagerPage,
    FlashlightPage,
    ReadingPage,
    DetectLightPage,
    NightLightPage,
    ColorOrganPage,
    CountdownPage,
    PresetPage,
    SleepAndWakePage,
    CandlePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BLE,
    BackgroundMode
  ]
})
export class AppModule {}
