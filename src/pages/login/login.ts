import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import {FacebookAuth, User, AuthLoginResult} from '@ionic/cloud-angular'; 

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginDetails : AuthLoginResult;

  constructor(private user : User, private facebook : FacebookAuth, public navCtrl: NavController, public navParams: NavParams) {}

  async login():Promise<void>{ 
    try{
      const token =  await this.facebook.getToken();

      if(token){
        this.navCtrl.setRoot(HomePage);
      }
      else{
        this.loginDetails = await this.facebook.login();
        if(this.loginDetails.token){
          await this.facebook.storeToken(this.loginDetails.token);
          this.navCtrl.setRoot(HomePage);
        }
        console.log(this.loginDetails);
        console.log(this.user.social.facebook);
      }
    }
    catch(e){
      console.error(e);  
    }
  
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad LoginPage');
  // }

}
