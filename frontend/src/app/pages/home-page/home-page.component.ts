import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { FormGroup, FormsModule, ReactiveFormsModule, FormBuilder, Validators  } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { UserService } from '../../services/user.service';
import { UserProfilePageComponent } from '../user-profile-page/user-profile-page.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface User{
  username: string;
  password: string;
  first_name: string;
  last_name: string;
}

@Component({
  selector: 'full-stack-resume-home-page',
  standalone: true,
  imports: [ButtonModule, CardModule, DialogModule, FloatLabelModule, AvatarGroupModule, AvatarModule, FormsModule, ReactiveFormsModule, ToastModule, CommonModule],
  providers: [MessageService],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  formGroup!: FormGroup;  
  newUser: User = {
    username:  '',
    password: '',
    first_name: '',
    last_name: '',
  }


  loginVisible: boolean = false;

  createVisible: boolean = false;

  isCardVisible: boolean = true;
  
  value: string | undefined;
  
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private messageService: MessageService, private userService: UserService, private fb: FormBuilder, private router: Router){}

  ngOnInit(): void{
    this.formGroup = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required]
    });
  }
  
  createUser(){
    if(!this.formGroup.valid){
      this.missingInfo();
      this.showCreateAccountDialog();
      return;
    }
    this.userService.createUser(this.formGroup.value)
    .subscribe(
      (data) => {
        console.log('Data', data);
        this.accountCreated();
      },
      (error) => {
        console.error('Error:', error);
        this.alreadyExists();
      },
      () => {
        this.createVisible = false;
        console.log('Observable completed');
      }
    );
  }

  userLogin(){
    this.userService.userLogin(this.formGroup.value)
    .subscribe(
      (data) => {
        console.log('Login successful:', data);
        this.loginSuccess();
        this.loginVisible = false;
        this.isCardVisible = false;
        setTimeout(() => {
          this.router.navigate(['profile']);
        }, 1000);
      },
      (error) => {
        if (error.status === 401) {
          console.error('Login failed: Unauthorized', error);
          this.loginFail();
        } else{
          console.error('Error:', error);
          this.loginFail();
        }
      },
      () => {
        console.log('Observable completed');
      }
    );
  }

  resetForm() {
    this.formGroup.reset();
  }
///Dialog Contorls
  public showLoginDialog(){
    this.loginVisible = true;
  } 

  public showCreateAccountDialog(){
    this.createVisible = true;
  }

  //Toast Messages for Login and creating account

  loginSuccess(){
    this.messageService.add({ severity: 'success', summary: 'Welcome Back', 
      detail: 'Happy Watching!'});
  }
  loginFail(){
    this.messageService.add({ severity: 'error', summary: 'Error Logging in.', 
      detail: 'Wrong Username/Password.'});
  }

  accountCreated(){
    this.messageService.add({ severity: 'success', summary: 'Success', 
      detail: 'Account Created!'});
  }

  missingInfo(){
    this.messageService.add({ severity: 'error', summary: 'Error', 
      detail: 'Some field(s) missing, or Password is not at least 6 characters.', life: 3000});
  }
  passwordLength(){
    this.messageService.add({ severity: 'error', summary: 'Error', 
      detail: 'Password must be at least 6 characters long.', life: 3000});
  }

  alreadyExists(){
    this.messageService.add({ severity: 'error', summary: 'Error', 
      detail: 'Username already exists', life: 3000});
  }

 

}
