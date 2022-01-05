import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{
  loginModel = new Login();

  constructor(  private router: Router, private loginService: LoginService ) { }

  ngOnInit(): void 
  {
    
  }

  onSubmit()
  {
    this.loginService.login( this.loginModel ).subscribe( ( response ) => 
    {
      this.router.navigateByUrl( '/' );
    })
  }
}
