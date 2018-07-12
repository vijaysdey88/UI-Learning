import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDropdownDirective } from './directives/app-dropdown.directive';
import { HomeComponent } from '../core/home/home.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppDropdownDirective,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    AppDropdownDirective,
    HttpClientModule
  ]
})
export class AppCommonModule { }
