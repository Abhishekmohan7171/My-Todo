import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFireDatabaseModule } from '@angular/fire/database';
// import { initializeApp } from 'firebase/app';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { environment } from 'src/environments/environment';

// export const firebaseConfig = {
//   apiKey: 'AIzaSyD1jGuJW9sEmtLDHsPMNXLs3FyfFPhgvkc',
//   authDomain: 'my-todo-77f78.firebaseapp.com',
//   projectId: 'my-todo-77f78',
//   storageBucket: 'my-todo-77f78.appspot.com',
//   messagingSenderId: '303666774479',
//   appId: '1:303666774479:web:fe1f304863aa81341d52ba',
// }

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireDatabaseModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
