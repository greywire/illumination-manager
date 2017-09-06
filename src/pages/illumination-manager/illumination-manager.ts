import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FlashlightPage } from '../flashlight/flashlight';
import { ReadingPage } from '../reading/reading';
import { DetectLightPage } from '../detect-light/detect-light';
import { NightLightPage } from '../night-light/night-light';
import { CountdownPage } from '../countdown/countdown';
import { ColorOrganPage } from '../color-organ/color-organ';
import { PresetPage } from '../preset/preset';
import { CandlePage } from '../candle/candle';
import { SleepAndWakePage } from '../sleep-and-wake/sleep-and-wake';
import { BLE } from '@ionic-native/ble';
import { BackgroundMode } from '@ionic-native/background-mode';

@Component({
  selector: 'page-illumination-manager',
  templateUrl: 'illumination-manager.html'
})
export class IlluminationManagerPage {
  pids: any[] = [];

  constructor(public navCtrl: NavController,private ble: BLE, private backgroundMode: BackgroundMode) {
  this.backgroundMode.enable();
  }

  ionViewDidEnter() {
    this.scan();
  }

  scan() {
    let ble = this.ble;

    ble.scan([],10).subscribe((device)=> {
        if (device.name == "Personal Illumination Device") {
          this.foundPid(device);
        }

    }, error => {console.log(error);});
  }

  foundPid(pid) {
    this.ble.connect(pid.id).subscribe((data)=>{
      //alert("connected");
      },error=>{
                //alert(error);
      });

    this.pids.push(pid);
  }

  goToFlashlight(params){
    if (!params) params = {};
    this.navCtrl.push(FlashlightPage, {pids: this.pids});
  }

  goToReading(params){
    if (!params) params = {};
    this.navCtrl.push(ReadingPage, {pids: this.pids});
  }

  goToDetectLight(params){
    if (!params) params = {};
    this.navCtrl.push(DetectLightPage, {pids: this.pids});
  }

  goToNightLight(params){
    if (!params) params = {};
    this.navCtrl.push(NightLightPage);
  }

  goToCountdown(params){
    if (!params) params = {};
    this.navCtrl.push(CountdownPage, {pids: this.pids});
  }

  goToColorOrgan(params){
    if (!params) params = {};
    this.navCtrl.push(ColorOrganPage, {pids: this.pids});
  }

  goToCandle(params){
    if (!params) params = {};
    this.navCtrl.push(CandlePage, {pids: this.pids});
  }

  goToPreset2(params){
    if (!params) params = {};
    this.navCtrl.push(PresetPage);
  }

  goToSleepAndWake(params){
    if (!params) params = {};
    this.navCtrl.push(SleepAndWakePage);
  }
}
