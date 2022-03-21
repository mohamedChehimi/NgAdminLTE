import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from "../menu";

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input()
  public configs:MenuItem[] = []

  ngOnInit(): void {
  }

}
