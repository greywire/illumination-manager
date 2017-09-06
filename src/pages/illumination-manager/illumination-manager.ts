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
import { BLE } from '@ionic-native/ble';

@Component({
  selector: 'page-illumination-manager',
  templateUrl: 'illumination-manager.html'
})
export class IlluminationManagerPage {
  pids: any[] = [];

  constructor(public navCtrl: NavController,private ble: BLE) {
  }

  ionViewDidEnter() {
    this.scan();
  }

  scan() {
    let ble = this.ble;

    ble.scan([],10).subscribe((device)=> {
        if (device.name == "Personal Illumination Manager") {
          this.foundPid(device);
        }

    }, error => {console.log(error);});
  }

  foundPid(pid) {
    this.ble.connect(pid.id).subscribe((data)=>{
      console.log("connected");
      console.log(data);
      },error=>{
                console.log(error);
      });

    this.pids.push(pid);
  }

  goToFlashlight(params){
    if (!params) params = {};
    this.navCtrl.push(FlashlightPage, {pids: this.pids});
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
