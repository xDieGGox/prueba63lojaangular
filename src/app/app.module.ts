import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { enviroments } from './enviroments/enviroments';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MnuComponent } from './mnu/mnu.component';
import { PruebaComponent } from './pages/prueba/prueba.component';

@NgModule({
  declarations: [
    AppComponent,
    MnuComponent,
    PruebaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(enviroments.firebaseConfig)),
    provideFirestore(() => getFirestore()),

    HttpClientModule
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: enviroments.firebaseConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
