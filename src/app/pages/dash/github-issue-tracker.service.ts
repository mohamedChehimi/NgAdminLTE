import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiResult, ManagedDataSource} from "../../common-ui/datatable/contracts";
import {SortDirection} from "@angular/material/sort";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GithubIssueTrackerService implements ManagedDataSource {

  constructor(private  httpClient: HttpClient) {
  }

  getData(filters:any,sortActive: string, sortDirection: SortDirection, page: number): Observable<ApiResult> {
    const href = 'https://api.github.com/search/issues';
    const requestUrl = `${href}?q=repo:angular/components&sort=${sortActive}&order=${sortDirection}&page=${page + 1}`;
    return this.httpClient.get<ApiResult>(requestUrl);
  }


}
