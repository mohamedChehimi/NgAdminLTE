import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';
import { SamplePageComponent } from './sample-page/sample-page.component';
import { ContentHeaderComponent } from './content-header/content-header.component';
import {MenuModule} from "../menu/menu.module";



@NgModule({
  declarations: [
    NavbarComponent,
    AsideComponent,
    FooterComponent,
    SamplePageComponent,
    ContentHeaderComponent
  ],
  imports: [
    CommonModule,
    MenuModule
  ],
  exports:[
    NavbarComponent,
    AsideComponent,
    FooterComponent,
    SamplePageComponent,
    ContentHeaderComponent
  ]
})
export class TemplateModule { }
