import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContaPage } from '../conta/conta';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  txtUser:string;
  txtPass:string;

  constructor(public navCtrl: NavController, public alerCtrl: AlertController) {

  }

  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'ERROR',
      message: 'Login ou Senha Incorretos',
      buttons: ['Ok']
    });
    alert.present()
  }

  goToConta() {
    if((this.txtUser == "admin") && (this.txtPass == "abc")){
      this.navCtrl.push(ContaPage);
    } else{
      this.doAlert();
    }
  }
  }


