import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";
import { SignUpPage } from "../pages/sign-up/sign-up";
import { LoginPage } from "../pages/login/login";
import { QuizzPage } from "../pages/quizz/quizz";
import { ScorePage } from "../pages/score/score";
import { ListPage } from "../pages/list/list";
// import { Firebase } from "@ionic-native/firebase";

// Import ng-circle-progress
import { NgCircleProgressModule } from "ng-circle-progress";

import { HttpModule } from "@angular/http";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { FirebaseProvider } from "./../providers/firebase/firebase";

const firebaseConfig = {
	apiKey: "AIzaSyBEbpNe5Mn0snDCJW4mzTe9U8nly7--WVw",
	authDomain: "ionic-137bd.firebaseapp.com",
	databaseURL: "https://ionic-137bd.firebaseio.com",
	projectId: "ionic-137bd",
	storageBucket: "ionic-137bd.appspot.com",
	messagingSenderId: "312270017905"
};

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

@NgModule({
	declarations: [
		MyApp,
		SignUpPage,
		LoginPage,
		QuizzPage,
		ScorePage,
		ListPage
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp),
		HttpModule,
		AngularFireDatabaseModule,
		AngularFireModule.initializeApp(firebaseConfig),
		// Specify ng-circle-progress as an import
		NgCircleProgressModule.forRoot({
			// set defaults here
			radius: 100,
			outerStrokeWidth: 16,
			innerStrokeWidth: 8,
			outerStrokeColor: "#78C000",
			innerStrokeColor: "#C7E596",
			animationDuration: 300
		})
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		SignUpPage,
		LoginPage,
		QuizzPage,
		ScorePage,
		ListPage
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
		FirebaseProvider
	]
})
export class AppModule {}
