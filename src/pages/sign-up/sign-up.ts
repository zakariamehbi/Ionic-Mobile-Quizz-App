import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { QuizzPage } from '../quizz/quizz';
import { ScorePage } from '../score/score';
import { SignUpPage } from '../sign-up/sign-up';

@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html'
})
export class SignUpPage {

  constructor(public navCtrl: NavController) {
  }
  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToQuizz(params){
    if (!params) params = {};
    this.navCtrl.push(QuizzPage);
  }goToScore(params){
    if (!params) params = {};
    this.navCtrl.push(ScorePage);
  }goToSignUp(params){
    if (!params) params = {};
    this.navCtrl.push(SignUpPage);
  }
}
