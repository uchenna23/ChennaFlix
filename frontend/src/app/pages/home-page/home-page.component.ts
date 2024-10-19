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
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface User{
  username: string;
  password: string;
  first_name: string;
  last_name: string;
  avatar?: string; 
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
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    avatar: ''
  };

  avatars: string[] = [
    'assets/avatars/001-man.png',
    'assets/avatars/002-woman.png',
    'assets/avatars/003-man.png',
    'assets/avatars/006-man.png',
    'assets/avatars/004-woman.png'
  ];
  selectedAvatar: string | null = null;
  userAvatar: string | null = null;
  loginVisible: boolean = false;
  createVisible: boolean = false;
  isCardVisible: boolean = true;
  value: string | undefined;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private messageService: MessageService, private userService: UserService, private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      avatar: [''] // Add avatar control
    });
  }

  // Avatar selection
  selectAvatar(avatar: string) {
    this.selectedAvatar = avatar;
    this.formGroup.patchValue({ avatar: avatar });
  }

  createUser() {
    if (!this.formGroup.valid) {
      this.missingInfo();
      this.showCreateAccountDialog();
      return;
    }

    const userData = {
      ...this.formGroup.value,
      avatar: this.selectedAvatar || 'assets/avatars/001-man.png'
    };

    this.userService.createUser(userData).subscribe(
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

  userLogin() {
    this.userService.userLogin(this.formGroup.value).subscribe(
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
        } else {
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

  // Dialog Controls
  public showLoginDialog() {
    this.loginVisible = true;
  }

  public showCreateAccountDialog() {
    this.createVisible = true;
  }

  // Toast Messages for Login and creating account
  loginSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: 'Welcome Back',
      detail: 'Happy Watching!'
    });
  }

  loginFail() {
    this.messageService.add({
      severity: 'error',
      summary: 'Error Logging in.',
      detail: 'Wrong Username/Password.'
    });
  }

  accountCreated() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Account Created!'
    });
  }

  missingInfo() {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Some field(s) missing, or Password is not at least 6 characters.',
      life: 3000
    });
  }

  alreadyExists() {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Username already exists',
      life: 3000
    });
  }
}
