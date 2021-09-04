import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { EmpresaPage } from '../pages/empresa/empresa';
import { TecnologiaPage } from '../pages/tecnologia/tecnologia';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;

  homePage = HomePage;
  empresaPage = EmpresaPage;
  tecnologiaPage = TecnologiaPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page);
  }
}

