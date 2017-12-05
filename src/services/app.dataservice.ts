import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

    /**
     * declare a behavior subject object to be broadcasted
     */
    private messageSource = new BehaviorSubject<string>("Hi! Am Default Message");
    currentMessage = this.messageSource.asObservable();

    /**
     * change message fn
     */
    changeMessage(message: string){
        this.messageSource.next(message);
    }
}
