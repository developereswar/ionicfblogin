import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FacebookAuth} from '@ionic/cloud-angular'; 
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private facebook : FacebookAuth) {

  }

  async logout(){
    await this.facebook.logout();
      this.navCtrl.setRoot(LoginPage);
    
  }


}
