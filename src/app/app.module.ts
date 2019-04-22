import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FilterPage } from '../pages/filter/filter';
import { ExplorePage } from '../pages/explore/explore';
import { FilterSelectedPage } from '../pages/filter-selected/filter-selected';
import { ReadCodeBarPage } from '../pages/read-code-bar/read-code-bar';
import { InsertBooksPage } from '../pages/insert-books/insert-books';
import { UpdateBooksPage } from '../pages/update-books/update-books';
import { DeleteBooksPage } from '../pages/delete-books/delete-books';
import { AboutPage } from '../pages/about/about';
import { ModalUpdatePage } from '../pages/modal-update/modal-update';
import { BookPage } from '../pages/book/book';
import { BooksController } from '../controller/booksController';
import { SubjectController } from '../controller/subjectController';
import { PublisherController } from '../controller/publisherController';
import { AuthorController } from '../controller/authorController';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FilterPage,
    ExplorePage,
    FilterSelectedPage,
    ReadCodeBarPage,
    InsertBooksPage,
    UpdateBooksPage,
    DeleteBooksPage,
    AboutPage,
    ModalUpdatePage,
    BookPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FilterPage,
    ExplorePage,
    FilterSelectedPage,
    ReadCodeBarPage,
    InsertBooksPage,
    UpdateBooksPage,
    DeleteBooksPage,
    AboutPage,
    ModalUpdatePage,
    BookPage    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BooksController,
    SubjectController,
    PublisherController,
    AuthorController
  ]
})
export class AppModule {}