import { QuizzPage } from "./../quizz/quizz";
import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { FirebaseProvider } from "./../../providers/firebase/firebase";
import { Observable } from "rxjs";

@Component({
	selector: "page-list",
	templateUrl: "list.html"
})
export class ListPage {
	quizz: Observable<any[]>;
	quizzArray: any[] = [];

	constructor(
		public navCtrl: NavController,
		public firebaseProvider: FirebaseProvider
	) {
		this.quizz = this.firebaseProvider.getQuizz().valueChanges();

		this.quizz.subscribe(quizz => {
			quizz.map(quizz => {
				this.quizzArray.push(quizz);
			});
		});
	}

	ionViewDidLoad() {
		console.log("ionViewDidLoad ListPage");
	}

	goToQuizz(quizz) {
		if (quizz) {
			this.navCtrl.push(QuizzPage, { quizz });
		}
	}
}
