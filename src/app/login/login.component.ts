import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
msg:string;
  constructor(public logUser:UserService, public myRoute:Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
        'username': new FormControl(null, Validators.required),
        'password' : new FormControl(null, Validators.required)
      }
    );
  }

  doLogin(){
    var fvalue=this.loginForm.value;
    this.logUser.checkLogin().subscribe((data:any[])=>{
      console.log(data);
      for(var x in data){
        if(fvalue.username==data[x].username && fvalue.password==data[x].password){
          localStorage.setItem('user', fvalue.username);
          this.myRoute.navigateByUrl("/welcome");
          break;
        }
        this.msg="Invalid login"
      }
    }, (error:any)=>{
      console.log(error);
    })
    this.loginForm.reset(); 
  }

}
