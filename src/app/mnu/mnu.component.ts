import { Component } from '@angular/core';

@Component({
  selector: 'app-mnu',
  templateUrl: './mnu.component.html',
  styleUrls: ['./mnu.component.scss']
})
export class MnuComponent {
  pages = [
    {title: 'Lista de clientes', path: 'pages/prueba'},
  ]
}
