import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CentraliComponent } from './components/centrali/centrali.component';
import { PercorsiComponent } from './components/percorsi/percorsi.component';
import { CentraleDetailComponent } from './components/centrale-detail/centrale-detail.component';

export const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch: 'full'},
  {path: 'home', component: HomepageComponent},
  {path: 'centrali', component: CentraliComponent},
  {path: 'centrali/:id', component: CentraleDetailComponent},
  {path: 'percorsi', component: PercorsiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
