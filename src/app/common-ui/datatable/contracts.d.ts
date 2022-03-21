import {SortDirection} from "@angular/material/sort";
import {Observable} from "rxjs";
import {TemplateRef} from "@angular/core";
export  interface ApiResult{
  items: any[],
  "total_count": number
}
export interface ManagedDataSource {
  getData(
    filters: any,
    sortActive: string,
    sortDirection: SortDirection,
    page: number
  ): Observable<ApiResult>
}


export type ColumnDef = {
  name: string;
  label: string;
  projector: (a:any)=>string;
}

export interface CellTemplateRef {
  name: string;
  ref: TemplateRef<any>
}
