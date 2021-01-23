import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppEventsService {

  clearInputSearch: EventEmitter<boolean> = new EventEmitter();
  setInputSearch: EventEmitter<string> = new EventEmitter();

}
