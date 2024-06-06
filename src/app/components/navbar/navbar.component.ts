import { AfterViewInit, Component, HostListener } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterModule,
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements AfterViewInit {

  ngAfterViewInit(): void {

  }

  @HostListener('window:scroll', [])
  onWindowScroll(){
      const navEl = document.querySelector('.navbar') as HTMLElement;

      window.addEventListener('scroll', () => {
        if(window.scrollY > 30){
          navEl!.classList.add('navbar-scrolled');
        }else if(window.scrollY <=30){
          navEl!.classList.remove('navbar-scrolled');
        }
      });
  };
/*
  onClickToggler= ()=>{
    const navEl = document.querySelector('.navbar') as HTMLElement;

      if (navEl!.classList.contains('navbar-scrolled')){
      }else{
        return navEl!.classList.add('navbar-scrolled');
      }
    }
*/
  }

/*
<script>
  const navEl = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if(window.scrollY > 30){
      navEl.classList.add('navbar-scrolled');
    }else if(window.scrollY <=30){
      navEl.classList.remove('navbar-scrolled');
    }
  });
</script>
*/
