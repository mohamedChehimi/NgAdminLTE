import {
  Component,
  ViewChild,
  AfterViewInit,
  Input,
  EventEmitter,
  ViewChildren,
  QueryList,
  ElementRef, TemplateRef
} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, SortDirection} from '@angular/material/sort';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {ManagedDataSource, ColumnDef, CellTemplateRef} from "./contracts";
import {CellContentComponent} from "../cell-content/cell-content.component";

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements AfterViewInit {


  @ViewChild(MatPaginator)
  private paginator: MatPaginator;

  @ViewChild(MatSort)
  private sort: MatSort;

  @Input() itemTemplate: TemplateRef<any>;

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  @Input()
  public columnsDefinition: ColumnDef[] = [];
  @Input()
  public dataSrc: ManagedDataSource | null;
  @Input()
  public filter: EventEmitter<any>
  public data: any[] = []

  @Input()
  templates: CellTemplateRef[]

  private filters:any

  constructor() {
    this.sort = new MatSort()
    this.filter = new EventEmitter<any>(true)
    this.filters = {}
  }

  ngAfterViewInit(): void {

    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
    this.filter.subscribe((f: any) => {
      this.filters = f;
      this.paginator.pageIndex = 0
    });
    const cmdr = [this.sort.sortChange, this.paginator.page, this.filter]
    merge(...cmdr)
      .pipe(
        startWith({}),
        switchMap((x: any) => {
          this.isLoadingResults = true;
          //control to dev
          return this.dataSrc!.getData(
            this.filters,
            this.sort.active,
            this.sort.direction,
            this.paginator.pageIndex,
          ).pipe(catchError(() => observableOf(null)));
        }),
        map((data: any) => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = data === null;

          if (data === null) {
            return [];
          }

          // Only refresh the result length if there is new data. In case of rate
          // limit errors, we do not want to reset the paginator to zero, as that
          // would prevent users from re-triggering requests.
          this.resultsLength = data["total_count"];
          return data.items;
        })
      )
      .subscribe(data => (this.data = data));
  }

  public displayedColumns(): string[] {
    return this.columnsDefinition.map((col: ColumnDef) => {
      return col.name
    });
  }

  public getTemplateRefByName(templates:CellTemplateRef[], name:string):TemplateRef<any>|null{
    const refs = templates
      .filter((cellTpl:CellTemplateRef)=>{
      return cellTpl.name === name
    }).map((cellTpl:CellTemplateRef)=>{
      return cellTpl.ref
    })
    const ref = refs[0]?refs[0]:null
    console.log('ref', ref)
    return ref
  }


}
