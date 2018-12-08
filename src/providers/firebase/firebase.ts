import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {
	constructor(public afd: AngularFireDatabase) {}

	getAccounts() {
		return this.afd.list("/accounts/");
	}

	addAccount(name, email, password) {
		this.afd.list("/accounts/").push({ name, email, password });
	}

	/*removeAccount(id) {
		this.afd.list("/accounts/").remove(id);
	}*/

	getQuizz() {
		return this.afd.list("/quizz/");
	}
}
