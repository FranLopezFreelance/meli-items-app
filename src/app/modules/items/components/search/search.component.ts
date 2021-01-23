import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppEventsService } from 'src/app/core/services/app-events.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  constructor(
    private eventsService: AppEventsService,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    // Seteo el título de la página
    this.titleService.setTitle('Meli Items App. Nunca dejes de buscar');
    // Limpio el buscador poniéndole el foco
    this.eventsService.clearInputSearch.emit(true);
  }

}
