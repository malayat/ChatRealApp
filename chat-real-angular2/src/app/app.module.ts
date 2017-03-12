import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';

import { MaterialModule } from '@angular/material';

export const firebaseConfig = {
  apiKey: "AIzaSyBIzJR8b3xcjLRp0mCKaPvp9-yGWqBwCsU",
  authDomain: "chat-real-b1442.firebaseapp.com",
  databaseURL: "https://chat-real-b1442.firebaseio.com",
  storageBucket: "chat-real-b1442.appspot.com",
  messagingSenderId: "858389939399"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
