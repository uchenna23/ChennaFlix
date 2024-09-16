import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';


@Component({
  selector: 'full-stack-resume-menu-bar',
  standalone: true,
  imports: [TabMenuModule, MenubarModule, AvatarModule, AvatarGroupModule ],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss'
})
export class MenuBarComponent {

    items: MenuItem[] | undefined;

    ngOnInit() {
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
                routerLink: 'settings',
            }
        ]
    }



}
