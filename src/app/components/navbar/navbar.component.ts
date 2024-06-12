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

  constructor(private searchSrv : SearchbarService){}

  fetchedList = this.searchSrv.fetchObjects();
  filteredList : SearchResults[] = [];

  onSearch(term: string){
    if(term){
      return this.filterByTerm(term);
    }
    else{
      this.filteredList = [];
      return this.filteredList;
    }
  }

  filterByTerm = (term: string) => {
    this.filteredList = [];
    this.fetchedList.forEach(e => {
      if(e.name.toLowerCase().includes(term.trim()) || e.type.toLowerCase().includes(term.trim())){
        this.filteredList.push(e);
      }
    });
  }

  //!DO NOT MODIFY
  @HostListener('window:scroll', [])
  /**
   * Changes background of the navbar dinamically on scroll
   */
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

  /**
   * Changes blur to the body of the page on input in searchBox
  */
  onInput(){
    const bodyEl = document.querySelector('.second') as HTMLElement;
    const resultboxEl = document.querySelector('.result-box') as HTMLElement;

    if(resultboxEl){
      bodyEl.style.filter = 'blur(2px)';
    }else{
      bodyEl.style.filter = 'blur(0px)';
    }
  };
}
