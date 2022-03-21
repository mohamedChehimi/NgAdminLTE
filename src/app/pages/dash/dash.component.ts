import {Component,  OnInit} from '@angular/core';
import { ColumnDef} from "../../common-ui/datatable/contracts";
import {GithubIssueTrackerService} from "./github-issue-tracker.service";

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit{

  public columns: ColumnDef[] = [];
  constructor(public githubTracker: GithubIssueTrackerService) {

  }

  ngOnInit(): void {
    this.columns = [

      {
        name: 'created_at',
        label: 'created at',
        projector: (r: any) => {
          return (r['created_at'])
        }
      },
      {
        name: 'number',
        label: 'number',
        projector: (r: any) => {
          return (r['number'])
        }
      },

      {
        name: 'state',
        label: 'state',
        projector: (r: any) => {
          return (r['state'])
        }
      },

      {
        name: 'title',
        label: 'title',
        projector: (r: any) => {
          return (r['title'])
        }
      },
    ];

  }



  public displayedColumns(): string[] {
    return this.columns.map((col: ColumnDef) => {
      return col.name
    });
  }



}
