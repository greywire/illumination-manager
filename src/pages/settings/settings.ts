import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  availabledevices = [];
  bondeddevices = [];

  constructor(public navCtrl: NavController, private bluetoothSerial: BluetoothSerial) {
    let model = this;

    this.bluetoothSerial.list().then(function(devices) {
      model.bondeddevices = devices;
    })

    this.bluetoothSerial.discoverUnpaired().then(function(devices) {
      console.log(devices);
      model.availabledevices = devices;

    }, function() {console.log("failed");
    model.availabledevices = [{'name':'None'}];});
  }

  addDevice(item) {
    console.log("add");
  }
}
