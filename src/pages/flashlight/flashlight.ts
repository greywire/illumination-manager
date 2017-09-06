import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { BLE } from '@ionic-native/ble';

@Component({
  selector: 'page-flashlight',
  templateUrl: 'flashlight.html'
})
export class FlashlightPage {
  brightness = 200;
  pids: any[] = [];

  constructor(public navCtrl: NavController, private ble: BLE, public navParams: NavParams) {
    let model = this;

    this.pids = navParams.get('pids');

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
    let b = this.brightness;
    let bluefruit = {
      serviceUUID: '6e400001-b5a3-f393-e0a9-e50e24dcca9e',
      txCharacteristic: '6e400002-b5a3-f393-e0a9-e50e24dcca9e', // transmit is from the phone's perspective
      rxCharacteristic: '6e400003-b5a3-f393-e0a9-e50e24dcca9e'  // receive is from the phone's perspective
    };

      /* ble.scan([],10).subscribe((device)=> {
        console.log("scan: ");
        console.log(device);


          if (device.name == "Personal Illumination Manager") {
            console.log('its a pid');
            ble.connect(device.id).subscribe((data)=>{
              console.log("connected");
              console.log(data);*/

              ble.writeWithoutResponse(
                this.pids[0].id,
                bluefruit.serviceUUID,
                bluefruit.txCharacteristic,
                this.stringToBytes("M1 " + b + "\n\r")
                );
              /*
              },error=>{
                        console.log(error);
              });
          }

      }, error => {console.log(error);});*/
  }
}
