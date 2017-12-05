import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../services/app.dataservice';

@Component({
  selector: 'app-child',
  template:
  `
    <h3 class="display-3 p-2 text-white">
        {{ title }}
    </h3>
    <p class="display-4 ml-4 text-white"> 
        Message:
        <br/>
        <small>{{ message }}</small>
        <!-- <button class="btn btn-default" (click)="sendMessage()">Send Message</button> -->
    </p>
    <div class="container bg-warning m-3">
        <app-sibling></app-sibling>
    </div>
  `
})
export class ChildComponent {
  title = 'Child';

  /**
   * Input decorator
   */
  //@Input() message: string;


  /**
  * Output, Event Emitter decorator
  */
  message: string = "I am in child";
  @Output() messageEvent = new EventEmitter<string>();

  /**
   * set a send message event handler
   */
  sendMessage() {
    this.messageEvent.emit(this.message);
  }


  /**
   * Inject the data service
   */
  constructor(private dataService: DataService) {

    /// set the value...
    this.dataService.currentMessage.subscribe(msg => { this.message = msg });
  }
}