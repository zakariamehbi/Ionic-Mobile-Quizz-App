import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { ListPage } from "../list/list";
import { SignUpPage } from "../sign-up/sign-up";
import { FirebaseProvider } from "./../../providers/firebase/firebase";
// AngularFire synchronizes data as lists using the AngularFireList service.
// The AngularFireList service is not created by itself, but through the AngularFireDatabase service.
// import { AngularFireList } from "angularfire2/database";
import { Observable } from "rxjs";
import { AlertController } from "ionic-angular";

@Component({
	selector: "page-login",
	templateUrl: "login.html"
})
export class LoginPage {
	// accounts: AngularFireList<any[]>;
	accounts: Observable<any[]>;
	accountsArray: any[] = [];
	email = "";
	password = "";
	exist = false;

	constructor(
		public navCtrl: NavController,
		public alertCtrl: AlertController,
		public firebaseProvider: FirebaseProvider
	) {
		// this.accounts = this.firebaseProvider.getAccounts();
		this.accounts = this.firebaseProvider.getAccounts().valueChanges();

		this.accounts.subscribe(accounts => {
			accounts.map(account => {
				this.accountsArray.push(account);
			});
		});
	}

	login() {
		let alert;

		if (this.email && this.password) {
			this.accountsArray.map(account => {
				if (
					this.email == account.email &&
					this.password == account.password
				) {
					this.exist = true;
				}
			});

			if (this.exist) {
				alert = this.alertCtrl.create({
					title: "Welcome!",
					subTitle: "Hey, let's start the quizz, shall we?",
					buttons: ["OK"]
				});

				this.goToList();
			} else {
				alert = this.alertCtrl.create({
					title: "Sorry!",
					subTitle: "This account doesn't exist",
					buttons: ["OK"]
				});
			}

			alert.present();
		}
	}

	goToList() {
		this.navCtrl.push(ListPage);
	}

	goToSignUp() {
		this.navCtrl.push(SignUpPage);
	}
}
