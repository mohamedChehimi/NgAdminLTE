import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from './dash.component';

import { RouterModule, Routes } from '@angular/router';
import {MatTableModule} from "@angular/material/table";
import {CommonUiModule} from "../../common-ui/common-ui.module";
import {MatSortModule} from "@angular/material/sort";

const routes: Routes = [
  {
    path: '',
    component: DashComponent
  }
];

@NgModule({
  declarations: [
    DashComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    CommonUiModule,
    RouterModule.forChild(routes)
  ]
})
export class DashModule { }
