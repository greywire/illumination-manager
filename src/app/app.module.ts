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
import { SettingsPage } from '../pages/settings/settings';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';

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
    SettingsPage
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
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BluetoothSerial
  ]
})
export class AppModule {}
