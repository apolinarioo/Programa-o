import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ExplorePage } from '../pages/explore/explore';
import { ReadCodeBarPage } from '../pages/read-code-bar/read-code-bar';
import { InsertBooksPage } from '../pages/insert-books/insert-books';
import { UpdateBooksPage } from '../pages/update-books/update-books';
import { DeleteBooksPage } from '../pages/delete-books/delete-books';
import { AboutPage } from '../pages/about/about';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Explorar', component: ExplorePage },
      { title: 'Ler Código de Barra', component: ReadCodeBarPage },
      { title: 'Incluir Livros', component: InsertBooksPage },
      { title: 'Alterar Livros', component: UpdateBooksPage },
      { title: 'Excluir Livros', component: DeleteBooksPage },
      { title: 'Sobre', component: AboutPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
