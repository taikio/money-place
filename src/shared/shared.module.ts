import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideMenuComponent } from './side-menu/side-menu.component';
import { MainHeaderComponent } from './main-header/main-header.component';

@NgModule({
  declarations: [
    MainHeaderComponent,
    SideMenuComponent
  ],
  imports: [
  CommonModule
  ],
  exports: [
    MainHeaderComponent,
    SideMenuComponent
  ]
})
export class SharedModule { }
