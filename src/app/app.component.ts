import { Component } from '@angular/core';

/* Root component */
/* Uygulamanın ana componentidir. Sayfalar app.component.html
   içerisindeki <router-outlet></router-outlet>  içerise dolar.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
