import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AppEventsService } from 'src/app/core/services/app-events.service';
import { ItemsService } from 'src/app/core/services/items.service';
import { Item } from 'src/app/models/ISearchResponse';
import { ISearchResponse } from 'src/app/models/ISearchResponse';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html'
})
export class ResultsComponent implements OnInit {

  items!: Item[];
  categories!: string[];
  query!: string;
  routeSubs!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemsService: ItemsService,
    private eventsService: AppEventsService
  ) { }

  ngOnInit(): void {
    this.routeSubs = this.route.queryParamMap.pipe(
      switchMap(params => {
        this.query = params.get('search') || '';
        // Envío la query para popular el buscador si es que el usuario ingresó la búsqueda por URL
        this.eventsService.setInputSearch.emit(this.query);
        if (!this.query.length) {
          // Si no hay query redirijo al root en la subscripcion
          return of(false);
        } else {
          // Si hay query hago la consulta
          return this.itemsService.getSearch(this.query);
        }
      })).subscribe((results: any) => {
        if (!results) {
          this.router.navigate(['/']);
        } else {
          this.items = results.items;
          this.categories = results.categories;
        }
      }, (error) => {
        console.log(error);
        this.router.navigate(['/']);
      });
  }

}
