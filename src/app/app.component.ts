import { Component } from '@angular/core';

// Custom imports
import { Post } from './models/post';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyCKNUFmjlrhsHnz4pZgqKk5hS4E2ezZGo4',
      authDomain: 'blogpost-26906.firebaseapp.com',
      databaseURL: 'https://blogpost-26906.firebaseio.com',
      projectId: 'blogpost-26906',
      storageBucket: '',
      messagingSenderId: '1091592958753',
      appId: '1:1091592958753:web:e8984e3a46b8767ca2c460'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
