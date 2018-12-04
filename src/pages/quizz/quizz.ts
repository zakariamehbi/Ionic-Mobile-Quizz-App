import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ScorePage } from '../score/score';
import { LoginPage } from '../login/login';
import { SignUpPage } from '../sign-up/sign-up';

@Component({
  selector: 'page-quizz',
  templateUrl: 'quizz.html'
})
export class QuizzPage {

  constructor(public navCtrl: NavController) {
  }
  goToScore(params){
    if (!params) params = {};
    this.navCtrl.push(ScorePage);
  }goToQuizz(params){
    if (!params) params = {};
    this.navCtrl.push(QuizzPage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToSignUp(params){
    if (!params) params = {};
    this.navCtrl.push(SignUpPage);
  }
}
