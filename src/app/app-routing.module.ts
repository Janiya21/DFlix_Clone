import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MoviesComponent } from './movies/movies.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {path:'movies', component: MoviesComponent},
  {path:'homePage', component: HomePageComponent},
  {path:'signIn', component: SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MoviesComponent,HomePageComponent]
