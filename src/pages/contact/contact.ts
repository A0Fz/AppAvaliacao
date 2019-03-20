import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ContaPage } from '../conta/conta';
import { Storage } from '@ionic/storage';
import { stringify } from '@angular/core/src/render3/util';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  txtUser:string;
  txtPass:string;

  constructor(public navCtrl: NavController, public alerCtrl: AlertController, private storage: Storage ) {

  }
getPerfil(){
  let perfilUser = {
    login:"",
    senha:""
  };
  perfilUser.login = this.txtUser;
  perfilUser.senha = this.txtPass;
  localStorage.setItem("perfil", JSON.stringify(perfilUser));
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


