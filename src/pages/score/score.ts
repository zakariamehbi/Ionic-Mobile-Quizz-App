import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { ListPage } from "../list/list";
import { LoginPage } from "../login/login";

@Component({
	selector: "page-score",
	templateUrl: "score.html"
})
export class ScorePage {
	total: number = 0;
	score: number = 0;
	percentage: number = 0;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.total = navParams.get("total");
		this.score = navParams.get("score");
		this.percentage = (this.score * 100) / this.total;
	}

	goToList() {
		this.navCtrl.push(ListPage);
	}

	goToLogin() {
		this.navCtrl.push(LoginPage);
	}
}
