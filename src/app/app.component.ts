import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomepageComponent,
    NavbarComponent,
    RouterLink,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../fontstyle.css']
})
export class AppComponent {
  title = 'NG-Valli-dell-energia';
}
