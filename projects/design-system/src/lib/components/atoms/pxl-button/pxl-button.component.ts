import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-pxl-button',
  templateUrl: './pxl-button.component.html',
  styleUrls: ['./pxl-button.component.scss']
})
export default class PxlButtonComponent {

  @Input() primary = false;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() level: 'primary' | 'secondary' | 'tertiary' = 'primary';
  @Input() label = 'Button';

  @Output() onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary ? 'pxl-button--primary' : 'primary-button--secondary';
    return ['pxl-button', `pxl-button--${this.size}`, mode];
  }

}
