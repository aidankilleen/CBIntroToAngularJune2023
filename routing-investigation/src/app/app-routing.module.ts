import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MemberDetailPageComponent } from './member-detail-page/member-detail-page.component';
import { MembersPageComponent } from './members-page/members-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'}, 
  { path: 'home', component: HomePageComponent }, 
  { path: 'about', component: AboutPageComponent }, 
  { path: 'contact', component: ContactPageComponent }, 
  { path: 'members', component: MembersPageComponent }, 
  { path: 'members/:id', component: MemberDetailPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
