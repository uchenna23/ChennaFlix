import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { UserService } from '../../services/user.service';


interface User{
  username: string;
  password: string;
  first_name: string;
  last_name: string;
}

@Component({
  selector: 'full-stack-resume-home-page',
  standalone: true,
  imports: [ButtonModule, CardModule, DialogModule, FloatLabelModule, AvatarGroupModule, AvatarModule, FormsModule, ReactiveFormsModule, ToastModule],
  providers: [MessageService],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private messageService: MessageService, private userService: UserService){}

  formGroup!: FormGroup;

  // Create Account User Inputs
  newUser: User = {
    username:  '',
    password: '',
    first_name: '',
    last_name: '',
  }


  loginVisible: boolean = false;

  createVisible: boolean = false;
  
  value: string | undefined;

  createUser() {
    this.userService.createUser(this.newUser)
    .subscribe(
      (data) => {
        // This function runs when the Observable emits a value (the HTTP response)
        console.log('Data:', data);
      },
      (error) => {
        // This function runs if an error occurs during the observable execution
        console.error('Error:', error);
      },
      () => {
        // This function runs when the Observable completes
        console.log('Observable completed');
      }
    );
  }


  public showLoginDialog(){
    this.loginVisible = true;
  } 

  public showCreateAccountDialog(){
    this.createVisible = true;
  }
  
  ngOnInit(): void {
    this.formGroup = new FormGroup({
      text: new FormControl()
  });
  }

  //Toast Messages for Login and creating account

  loginSuccess(){
    this.messageService.add({ severity: 'success', summary: 'Welcome Back', 
      detail: 'Happy Watching!'});
  }

  accountCreated(){
    this.messageService.add({ severity: 'success', summary: 'Success', 
      detail: 'Account Created!'});
  }

}
