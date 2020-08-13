import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-button',
  template: `<button [disabled]="disabled">{{text}}</button>`,
  styles: [
  ]
})
export class ButtonComponent {
  @Input() text: string;
  @Input() disabled: boolean;
}
