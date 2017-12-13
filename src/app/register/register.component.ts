import { Component, OnInit } from '@angular/core';
import {LoginService} from "../provider/login.service";
import {Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = { username: '', password: '', profileType: 'ROLE_ADMIN' };

  constructor(private loginService:LoginService,private location:Location,private router:Router) { }


  ngOnInit() {
  }

  register(user){
    this.loginService.register(this.user).subscribe(data =>{
      console.log(data);
      this.router.navigate(['login']);
    }), err =>{
      console.error(err);
    }
  }
  goBack(){
   this.location.back();
  }
}
