import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { SearchbarService } from '../../services/searchbar.service';
import { SearchResults } from '../../interfaces/searchResults';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterModule,
    RouterLink,
    NgFor
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private searchSrv : SearchbarService){}

  @HostListener('window:scroll', [])
  onWindowScroll(){
      const navEl = document.querySelector('.navbar') as HTMLElement;

      window.addEventListener('scroll', () => {
        if(window.scrollY > 30){
          navEl.classList.add('navbar-scrolled');
        }else if(window.scrollY <=30){
          navEl.classList.remove('navbar-scrolled');
        }
      });
  };

  searchList : SearchResults[] = [];

  onSearch(term: string){

  }
}
