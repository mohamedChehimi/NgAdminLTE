import {Injectable} from '@angular/core';
import {MenuItem, MenuMiddleware} from "./menu";
import {Observable, BehaviorSubject} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menu: BehaviorSubject<MenuItem[]>
  private conf: MenuItem[] = [
    {
      'text': 'hello  world',
      'open': 'nav-item menu-open',
      'active': true,
      'decoration': 'fas fa-tachometer-alt',
      'children': [
        {
          'text': 'oh yeah',
          'open': 'menu-open',
          'active': true,
        },
        {'text': 'oh yeah'},
        {'text': 'oh yeah'}
      ]
    }
  ];

  constructor() {
    this.menu = new BehaviorSubject<MenuItem[]>([])
    this.menu.next(this.conf)
  }

  setConfig(m: MenuMiddleware) {
    this.conf = m.filter(this.conf);
    this.menu.next(this.conf)
    return this;
  }

  getConfig(): Observable<MenuItem[]> {
    return this.menu.asObservable().pipe(map((conf: MenuItem[]) => {
      return conf
    }))
  }
}
