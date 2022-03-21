import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuItemComponent} from './menu-item/menu-item.component';
import { SubMenuItemComponent } from './sub-menu-item/sub-menu-item.component';


@NgModule({
  declarations: [
    MenuItemComponent,
    SubMenuItemComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MenuItemComponent
  ]
})
export class MenuModule {
}
