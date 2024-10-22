import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { HomePageComponent } from '../../pages/home-page/home-page.component';
import { GetAvatarService } from '../../services/get-avatar.service';

interface User{
  username: string;
  password: string;
  first_name: string;
  last_name: string;
  avatar: string; 
}

@Component({
  selector: 'full-stack-resume-menu-bar',
  standalone: true,
  imports: [TabMenuModule, MenubarModule, AvatarModule, AvatarGroupModule, CommonModule],
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {
  items: MenuItem[] | undefined;
  avatarUrl: string | undefined;

  constructor(private userService: UserService, private getAvatarService: GetAvatarService) {}

  loggedinUser: User = {
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    avatar: ''
  };

  ngOnInit(){
     
    this.getAvatarService.avatarUrl$.subscribe((newAvatarUrl) =>{
      this.avatarUrl = newAvatarUrl || '';
    });

    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: 'home'
      },
      {
        label: 'TV Shows',
        icon: 'pi pi-video',
        routerLink: 'tvshows'
      },
      {
        label: 'Movies',
        icon: 'pi pi-star',
        routerLink: 'movies'
      },
      {
        label: 'Settings',
        icon: 'pi pi-cog',
        routerLink: 'settings'
      }
    ];
  }
  
 


}
