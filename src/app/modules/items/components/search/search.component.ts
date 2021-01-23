import { Component, OnInit } from '@angular/core';
import { AppEventsService } from 'src/app/core/services/app-events.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  constructor(
    private eventsService: AppEventsService
  ) { }

  ngOnInit(): void {
    // Limpio el buscador poniéndole el foco
    this.eventsService.clearInputSearch.emit(true);
  }

}
