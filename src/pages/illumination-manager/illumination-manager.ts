import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FlashlightPage } from '../flashlight/flashlight';
import { SettingsPage } from '../settings/settings';
import { ReadingPage } from '../reading/reading';
import { DetectLightPage } from '../detect-light/detect-light';
import { NightLightPage } from '../night-light/night-light';
import { CountdownPage } from '../countdown/countdown';
import { ColorOrganPage } from '../color-organ/color-organ';
import { PresetPage } from '../preset/preset';
import { SleepAndWakePage } from '../sleep-and-wake/sleep-and-wake';

@Component({
  selector: 'page-illumination-manager',
  templateUrl: 'illumination-manager.html'
})
export class IlluminationManagerPage {

  constructor(public navCtrl: NavController) {
  }
  goToFlashlight(params){
    if (!params) params = {};
    this.navCtrl.push(FlashlightPage);
  }goToSettings(params){
    if (!params) params = {};
    this.navCtrl.push(SettingsPage);
  }goToReading(params){
    if (!params) params = {};
    this.navCtrl.push(ReadingPage);
  }goToDetectLight(params){
    if (!params) params = {};
    this.navCtrl.push(DetectLightPage);
  }goToNightLight(params){
    if (!params) params = {};
    this.navCtrl.push(NightLightPage);
  }goToCountdown(params){
    if (!params) params = {};
    this.navCtrl.push(CountdownPage);
  }goToColorOrgan(params){
    if (!params) params = {};
    this.navCtrl.push(ColorOrganPage);
  }goToPreset1(params){
    if (!params) params = {};
    this.navCtrl.push(PresetPage);
  }goToPreset2(params){
    if (!params) params = {};
    this.navCtrl.push(PresetPage);
  }goToSleepAndWake(params){
    if (!params) params = {};
    this.navCtrl.push(SleepAndWakePage);
  }
}
