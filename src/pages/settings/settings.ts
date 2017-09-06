import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BLE } from '@ionic-native/ble';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  availabledevices = [];
  bondeddevices = [];

  constructor(public navCtrl: NavController, private ble: BLE) {
    let model = this;
/*
    this.ble.scan().then(function(devices) {
      model.bondeddevices = devices;
    })

    this.bluetoothSerial.discoverUnpaired().then(function(devices) {
      console.log(devices);
      model.availabledevices = devices;

    }, function() {console.log("failed");
    model.availabledevices = [{'name':'None'}];});*/
  }

  addDevice(item) {
//    this.bluetoothSerial.connectInsecure(item.id);
    console.log("add");
  }
}
