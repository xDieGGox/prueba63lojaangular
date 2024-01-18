import { Component } from '@angular/core';
import { Nota } from './domain/nota';
import { NavigationExtras, Router } from '@angular/router';
import { NotasFirebaseService } from './services/notas-firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Repuesto';
}
