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
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'page-illumination-manager',
  templateUrl: 'illumination-manager.html'
})
export class IlluminationManagerPage {
  pids: any[] = [];
  bluefruit: any;
  connected: boolean = false;

  constructor(public navCtrl: NavController,private ble: BLE, private backgroundMode: BackgroundMode,private cd: ChangeDetectorRef) {
    this.bluefruit = {
      serviceUUID: '6e400001-b5a3-f393-e0a9-e50e24dcca9e',
      txCharacteristic: '6e400002-b5a3-f393-e0a9-e50e24dcca9e', // transmit is from the phone's perspective
      rxCharacteristic: '6e400003-b5a3-f393-e0a9-e50e24dcca9e'  // receive is from the phone's perspective
    };

    this.backgroundMode.enable();

    this.scan();
  }

  ionViewDidEnter() {
    this.scan();
  }

  //** connect or disconnect
  toggleconnection() {
    if (this.connected) {
      this.ble.disconnect(this.pids[0].id);
      this.connected = false;
    } else {
      this.scan();
    }
  }

  // Scan for devices with the right name
  scan() {
    this.ble.scan([],10).subscribe((device)=> {
        if (device.name == "Personal Illumination Device") {
          this.connectPid(device);
        }

    }, error => {console.log(error);});
  }

  //** connect to a device
  connectPid(pid) {
    //let timeout = 0;

    this.ble.connect(pid.id).subscribe((data)=>{
      this.connected = true;
      this.cd.detectChanges();
      //alert("connected");
      },error=>{
        this.connected = false;
        //timeout = setTimeout(()=>{ this.scan(); }, 4000)
                //alert(error);
      });

    this.pids.push(pid);
  }

  stringToBytes(string) {
      var array = new Uint8Array(string.length);
      for (var i = 0, l = string.length; i < l; i++) {
          array[i] = string.charCodeAt(i);
      }
      return array.buffer;
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
    this.ble.writeWithoutResponse(
      this.pids[0].id,
      this.bluefruit.serviceUUID,
      this.bluefruit.txCharacteristic,
      this.stringToBytes("M3\n\r")
    );
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
    this.ble.writeWithoutResponse(
      this.pids[0].id,
      this.bluefruit.serviceUUID,
      this.bluefruit.txCharacteristic,
      this.stringToBytes("M6\n\r")
    );
  }

  goToCandle(params){
    this.ble.writeWithoutResponse(
      this.pids[0].id,
      this.bluefruit.serviceUUID,
      this.bluefruit.txCharacteristic,
      this.stringToBytes("M7\n\r")
    );
  }

  goToPreset2(params){
    if (!params) params = {};
    this.navCtrl.push(PresetPage);
  }

  goToSleepAndWake(params){
    if (!params) params = {};
    this.navCtrl.push(SleepAndWakePage, {pids: this.pids});
  }
}
