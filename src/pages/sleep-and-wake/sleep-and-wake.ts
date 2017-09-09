import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BLE } from '@ionic-native/ble';

@Component({
  selector: 'page-sleep-and-wake',
  templateUrl: 'sleep-and-wake.html'
})
export class SleepAndWakePage {
  pids: any[] = [];
  nightlightTime;
  sleepTime;
  wakelightTime;

  timeout;

  bluefruit = {
    serviceUUID: '6e400001-b5a3-f393-e0a9-e50e24dcca9e',
    txCharacteristic: '6e400002-b5a3-f393-e0a9-e50e24dcca9e', // transmit is from the phone's perspective
    rxCharacteristic: '6e400003-b5a3-f393-e0a9-e50e24dcca9e'  // receive is from the phone's perspective
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private ble: BLE) {
    this.pids = navParams.get('pids');
  }

  go() {
    clearTimeout(this.timeout);

    let sleepnums = this.sleepTime.split(':');
    let sleeptime = sleepnums[0] * 60 + sleepnums[1];

    console.log(this.nightlightTime);
    console.log(sleeptime);
    console.log(this.wakelightTime);

    //** turn on the night light now
    this.sendCommand('S');

    this.timeout = setTimeout(() => {
      //** turn off the nightlight after nightlight timeout
      this.sendCommand('O');

      setTimeout(() => {
        //** now turn on the waking light
        this.sendCommand('W');

        setTimeout(() => {
          this.sendCommand('O');
        }, this.wakelightTime * 60000);
      }, sleeptime  * 60000);
    }, this.nightlightTime * 60000);
  }

  stringToBytes(string) {
      var array = new Uint8Array(string.length);
      for (var i = 0, l = string.length; i < l; i++) {
          array[i] = string.charCodeAt(i);
      }
      return array.buffer;
  }

  sendCommand(type) {
  console.log(type);

    this.ble.writeWithoutResponse(
      this.pids[0].id,
      this.bluefruit.serviceUUID,
      this.bluefruit.txCharacteristic,
      this.stringToBytes("M4" + type + "\n\r")
    );
  }
}
