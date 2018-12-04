import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";
import { SignUpPage } from "../pages/sign-up/sign-up";
import { LoginPage } from "../pages/login/login";
import { QuizzPage } from "../pages/quizz/quizz";
import { ScorePage } from "../pages/score/score";
import { Firebase } from "@ionic-native/firebase";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

@NgModule({
  declarations: [MyApp, SignUpPage, LoginPage, QuizzPage, ScorePage],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, SignUpPage, LoginPage, QuizzPage, ScorePage],
  providers: [
    StatusBar,
    SplashScreen,
    Firebase,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
