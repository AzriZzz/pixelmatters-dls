import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components Library
import ButtonComponent from './components/atoms/button/button.component';


@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent
  ]
})
export class DesignSystemModule { }
