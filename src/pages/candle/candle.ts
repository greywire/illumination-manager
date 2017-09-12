import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BLE } from '@ionic-native/ble';

/**
 * Generated class for the CandlePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-candle',
  templateUrl: 'candle.html',
})
export class CandlePage {
  pids: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private ble: BLE) {
    //let model = this;

    this.pids = navParams.get('pids');
  }

  ionViewDidLoad() {
    this.go();
  }

  stringToBytes(string) {
      var array = new Uint8Array(string.length);
      for (var i = 0, l = string.length; i < l; i++) {
          array[i] = string.charCodeAt(i);
      }
      return array.buffer;
  }

  go() {
    let ble = this.ble;

    let bluefruit = {
      serviceUUID: '6e400001-b5a3-f393-e0a9-e50e24dcca9e',
      txCharacteristic: '6e400002-b5a3-f393-e0a9-e50e24dcca9e', // transmit is from the phone's perspective
      rxCharacteristic: '6e400003-b5a3-f393-e0a9-e50e24dcca9e'  // receive is from the phone's perspective
    };

    ble.writeWithoutResponse(
      this.pids[0].id,
      bluefruit.serviceUUID,
      bluefruit.txCharacteristic,
      this.stringToBytes("M7\n\r")
      );
  }
}
