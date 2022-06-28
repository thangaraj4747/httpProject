import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { WeatherComponent } from './weather/weather.component';
import { NewsComponent } from './news/news.component';
import { ZomatoComponent } from './zomato/zomato.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'home', component:HomeComponent, canActivate: [AuthGuard]},
  {path:'welcome', component:WelcomeComponent, canActivate: [AuthGuard]},
  {path:'Weather', component:WeatherComponent, canActivate: [AuthGuard]},
  {path:'News', component:NewsComponent, canActivate: [AuthGuard]},
  {path:'newsletter', component:NewsletterComponent, canActivate: [AuthGuard]},
  {path:'Zomato', component:ZomatoComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
