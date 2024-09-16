import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'full-stack-resume-home-page',
  standalone: true,
  imports: [ButtonModule, CardModule, DialogModule, FloatLabelModule, AvatarGroupModule, AvatarModule, FormsModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  loginVisible: boolean = false;

  createVisible: boolean = false;
  
  value: string | undefined;

  public showLoginDialog(){
    this.loginVisible = true;
  } 

  public showCreateAccountDialog(){
    this.createVisible = true;
  }

}
