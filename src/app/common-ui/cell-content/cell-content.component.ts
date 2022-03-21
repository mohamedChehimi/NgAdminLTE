import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cell-content',
  templateUrl: './cell-content.component.html',
  styleUrls: ['./cell-content.component.scss']
})
export class CellContentComponent implements OnInit {


  @Input()
  public row:any = {}
  constructor() { }
  ngOnInit(): void {
  }

}
