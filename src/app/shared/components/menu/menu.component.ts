import { Component } from '@angular/core';
import { PrimeIcons, MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {

  public menuItems:MenuItem[] = [];

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Pipes de Angular',
        icon:  'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon:  'pi pi-align-left',
          },
          {
            label: 'Números',
            icon:  'pi pi-dollar',
          },
          {
            label: 'No comunes',
            icon:  'pi pi-globe',
          },
        ]
      },
      {
        label: 'Pipes personalizados',
        icon:  'pi pi-cog',
        items: [
          {
            label: 'Otro elemento',
            icon:  'pi pi-cog'
          }
        ]
      }
    ];
  }

}
