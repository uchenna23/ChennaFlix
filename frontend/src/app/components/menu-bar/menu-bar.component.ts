import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenubarModule } from 'primeng/menubar';


@Component({
  selector: 'full-stack-resume-menu-bar',
  standalone: true,
  imports: [TabMenuModule, MenubarModule, ],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss'
})
export class MenuBarComponent {

    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Login',
                icon: 'pi pi-home',
                routerLink: 'login'
            },
            {
                label: 'About Me',
                icon: 'pi pi-id-card',
                routerLink: 'aboutme'
            },
            {
                label: 'Employment History',
                icon: 'pi pi-pencil',
                routerLink: 'employment'
            },
            {
                label: 'Projects',
                icon: 'pi pi-search',
                routerLink: 'projects',
                items: [
                    {
                        label: 'DBM Dealer Web Application',
                        icon: 'pi pi-server',
                        shortcut: '⌘+S'
                    },
                    {
                        label: 'TVS Web Application',
                        icon: 'pi pi-server',
                        shortcut: '⌘+B'
                    },
                ]
            },
            {
                label: 'Contact',
                icon: 'pi pi-address-book',
                routerLink: 'contact'
            },
            
        ]
    }



}
