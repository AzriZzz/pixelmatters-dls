import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components Library
import ButtonComponent from './components/atoms/button/button.component';
import PxlButtonComponent from './components/atoms/pxl-button/pxl-button.component';


@NgModule({
  declarations: [
    ButtonComponent,
    PxlButtonComponent    
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    PxlButtonComponent
  ]
})
export class DesignSystemModule { }
