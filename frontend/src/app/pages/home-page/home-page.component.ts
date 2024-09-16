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

@Component({
  selector: 'full-stack-resume-home-page',
  standalone: true,
  imports: [ButtonModule, CardModule, DialogModule, FloatLabelModule, AvatarGroupModule, AvatarModule, FormsModule, ReactiveFormsModule, ToastModule],
  providers: [MessageService],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {

  constructor(private messageService: MessageService){}

  formGroup!: FormGroup;
  

  loginVisible: boolean = false;

  createVisible: boolean = false;
  
  value: string | undefined;

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

  }

}
