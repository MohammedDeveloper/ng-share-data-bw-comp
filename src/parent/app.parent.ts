import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from '../child/app.child';
import { DataService } from '../services/app.dataservice';

@Component({
    selector: 'app-parent',
    template:
    `
    <h2 class="display-2 p-2 text-white">
        {{ title }}
    </h2>
    <p class="display-4 ml-4 text-white"> 
        Message:
        <br/>
        <small>{{ message }}</small>
    </p>
    <div class="container bg-success m-3">
        <!-- <app-child [message]="message"></app-child> -->
        <app-child (messageEvent)="receiveMessage($event)"></app-child> 
    </div>
  `
})
export class ParentComponent implements OnInit {
    title = 'Parent';
    message: string = "Hello child! How are you?";

    /**
     * Injecting child component
     */
    // @ViewChild(ChildComponent) child;

    /**
     * AfterViewInit
     */
    // ngAfterViewInit() {
    //     this.message = this.child.message;
    // }

    /**
     * On init
     */
    ngOnInit() {
    }

    /**
     * Inject the data service
     */
    constructor(private dataService: DataService) {

        /// set the value...
        this.dataService.currentMessage.subscribe(msg => { this.message = msg });
    }

    /**
     * receiving message
     */
    receiveMessage($event) {
        this.message = $event;
    }
}