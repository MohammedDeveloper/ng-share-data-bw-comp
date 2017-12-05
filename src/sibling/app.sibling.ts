import { Component } from '@angular/core';
import { DataService } from '../services/app.dataservice';

@Component({
  selector: 'app-sibling',
  template:
  `
    <h4 class="display-4 p-2 text-white">
        {{ title }}
    </h4> 
    <p class="display-4 ml-4 text-white"> 
        Message:
        <br/>
        <small>{{ message }}</small>
        <button class="btn btn-default" (click)="changeMessage()">Change Message</button>
    </p>  
  `
})
export class SiblingComponent {
  title = 'Sibling';
  message = 'Am in sibling';

  /**
   * Inject the data service
   */
  constructor(private dataService: DataService) {

    /// set the value...
    this.dataService.currentMessage.subscribe(msg => { this.message = msg });
  }

  /**
  * change message to broadcast
  */
  changeMessage() {
    this.dataService.changeMessage("I changed the message")
  }
}