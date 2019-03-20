import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ComprasPage } from '../compras/compras';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  goToArtist() {
    this.navCtrl.push(ComprasPage);
  }

}
