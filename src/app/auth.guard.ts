import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public userSer:UserService, public myRoute: Router){

  }

  canActivate(): boolean {
if(!this.userSer.isLoggedIn()){
  this.myRoute.navigateByUrl("/");
} 
return this.userSer.isLoggedIn();   
  }
  
}
