import { Component, OnInit } from '@angular/core';
import {MenuItemComponent} from "../menu-item/menu-item.component";

@Component({
  selector: 'app-sub-menu-item',
  templateUrl: './sub-menu-item.component.html',
  styleUrls: ['./sub-menu-item.component.scss']
})
export class SubMenuItemComponent extends MenuItemComponent implements OnInit {


}
