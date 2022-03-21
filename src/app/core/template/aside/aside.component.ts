import { Component, OnInit } from '@angular/core';
import {MenuService} from "../../menu/menu.service";
import {Observable} from "rxjs";
import {MenuItem} from "../../menu/menu";

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  public menuConf$: Observable<MenuItem[]>;

  constructor(private menuService:MenuService) {
    this.menuConf$ = menuService.getConfig()
  }

  ngOnInit(): void {
  }

}
