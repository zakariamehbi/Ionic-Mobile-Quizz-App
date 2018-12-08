import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { ScorePage } from "../score/score";

@Component({
	selector: "page-quizz",
	templateUrl: "quizz.html"
})
export class QuizzPage {
	quizz: any;
	data: any;
	index: number = 0;
	nextIsEnabled: boolean = true;
	previousIsEnabled: boolean = false;
	scoreIsEnabled: boolean = false;
	response: any[] = [];
	score: number = 0;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.quizz = navParams.get("quizz");
		this.data = navParams.get("quizz").data;
	}

	nextQuestion() {
		this.index++;
		this.previousIsEnabled = true;

		if (this.data[this.index].options.length - 1 == this.index) {
			this.nextIsEnabled = false;
			this.scoreIsEnabled = true;
		}
	}

	previousQuestion() {
		this.index--;

		if (this.index == 0) {
			this.previousIsEnabled = false;
		} else {
			this.previousIsEnabled = true;
		}

		this.nextIsEnabled = true;
		this.scoreIsEnabled = false;
	}

	calculateScore() {
		for (let i = 0; i < this.data.length; i++) {
			console.log(this.response[i] + " == " + this.data[i].correct);
			if (this.response[i] == this.data[i].correct) this.score++;
		}

		this.goToScore({ total: this.data.length, score: this.score });
	}

	goToScore(params) {
		if (!params) params = {};
		this.navCtrl.push(ScorePage, params);
	}
}
