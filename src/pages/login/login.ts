import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuizzPage } from '../quizz/quizz';
import { ScorePage } from '../score/score';
import { SignUpPage } from '../sign-up/sign-up';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }
  goToQuizz(params){
    if (!params) params = {};
    this.navCtrl.push(QuizzPage);
  }goToScore(params){
    if (!params) params = {};
    this.navCtrl.push(ScorePage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToSignUp(params){
    if (!params) params = {};
    this.navCtrl.push(SignUpPage);
  }
}
