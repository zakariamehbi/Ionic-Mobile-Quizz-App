import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { LoginPage } from "../login/login";
import { FirebaseProvider } from "./../../providers/firebase/firebase";

@Component({
	selector: "page-sign-up",
	templateUrl: "sign-up.html"
})
export class SignUpPage {
	name = "";
	email = "";
	password = "";

	constructor(
		public navCtrl: NavController,
		public firebaseProvider: FirebaseProvider
	) {}

	addAccount() {
		this.firebaseProvider.addAccount(this.name, this.email, this.password);
		this.goToLogin();
	}

	goToLogin() {
		this.navCtrl.push(LoginPage);
	}
}
