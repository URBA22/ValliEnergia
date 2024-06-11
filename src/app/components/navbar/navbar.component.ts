import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { SearchbarService } from '../../services/searchbar.service';
import { SearchResults } from '../../interfaces/searchResults';
import { CommonModule, NgFor } from '@angular/common';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterModule,
    RouterLink,
    CommonModule,
    NgFor
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent{

  searchList : SearchResults[] = [];

  constructor(private searchSrv : SearchbarService){}

  onSearch(term: string){
    return this.searchList = this.searchSrv.search(term);
  }

  //!DO NOT MODIFY
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
}
