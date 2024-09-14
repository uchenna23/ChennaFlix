import { Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { FloatLabelModule } from 'primeng/floatlabel';



@Component({
  selector: 'full-stack-resume-login-page',
  standalone: true,
  imports: [DividerModule, ButtonModule, CardModule, DialogModule, FloatLabelModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  visible: boolean = false;
  
  value: string | undefined;

  public showLoginDialog(){
    this.visible = true;
  }


}
