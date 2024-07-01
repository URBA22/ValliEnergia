import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { SearchbarService } from '../../services/searchbar.service';
import { SearchResults } from '../../interfaces/searchResults';
import { CommonModule, NgFor } from '@angular/common';
import { Router } from '@angular/router';

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

  constructor(
    private searchSrv : SearchbarService,
    public router : Router
  ){}

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
    let termParsed = term.trim().toLowerCase();
    this.filteredList = [];
    if(termParsed.includes("perc" || "percorso" || "percorsi" || "sent" || "sentieri" || "sentiero")){
      this.fetchedList.forEach(item => {
        if(item.type === "percorso"){
          this.filteredList.push(item);
        }
      });
    }
    else if(termParsed.includes("cent" || "centrale" || "centrali")){
      this.fetchedList.forEach(item => {
        if(item.type === "centrale"){
          this.filteredList.push(item);
        }
      });
    }
    else{
      this.fetchedList.forEach(e => {
        if(e.name.toLowerCase().includes(termParsed)){
          this.filteredList.push(e);
        }
      });
    }


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
