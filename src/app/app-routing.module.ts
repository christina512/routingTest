import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { StartComponent } from './start/start.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:"" , redirectTo:"start" ,pathMatch:"full"},
  {path:"about" , component:AboutComponent, title:"About"},
  {path:"portfolio" , component:PortfolioComponent ,title:"Portfolio"},
  {path:"contact" , component:ContactComponent ,title:"Contact"},
  {path:"start" , component:StartComponent,title:"Home"},



  {path:"**" , component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
