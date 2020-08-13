import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-button',
  template: `<button [disabled]="disabled">{{text}}</button><br>Just a test`,
  styles: [
  ]
})
export class ButtonComponent {
  @Input() text: string;
  @Input() disabled: boolean;
}
