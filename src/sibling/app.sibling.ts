import { Component } from '@angular/core';

@Component({
  selector: 'app-sibling',
  template: 
  `
    <h4 class="display-4 p-5 text-white">
        {{ title }}
    </h4>   
  `
})
export class SiblingComponent {
  title = 'Sibling';
}