import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
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
export class ResultsComponent implements OnInit, OnDestroy {

  items!: Item[];
  categories!: string[];
  query!: string;
  routeSubs!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemsService: ItemsService,
    private eventsService: AppEventsService,
    private titleService: Title,
    private metaService: Meta
  ) { }

  ngOnInit(): void {
    this.routeSubs = this.route.queryParamMap.subscribe(params => {
      this.query = params.get('search') || '';
      // Seteo el título y metatags de la página
      this.setTitleAndMeta();
      // Envío los datos para popular el buscador si es que el usuario ingresó la búsqueda por URL
      this.eventsService.setInputSearch.emit(this.query);
      if (!this.query.length) {
        // Si no hay datos redirijo al root
        this.router.navigate(['/']);
      } else {
        // Si hay datos hago la consulta
        this.getResults(this.query);
      }
    });
  }

  getResults(query: string): void {
    this.itemsService.getResults(query).subscribe((response: ISearchResponse | any) => {
      // Obtengo items y categorías de la respuesta
      this.items = response.items;
      this.categories = response.categories;
    }, () => {
      alert('Ha ocurrido un error. ');
      this.router.navigate(['/']);
    });
  }

  setTitleAndMeta(): void {
    this.titleService.setTitle(`"${this.query}" | MercadoLibre.com.ar`);
    this.metaService.updateTag({name: 'description', content: `Resultados de búsqueda para ${this.query} en Mercadolibre.`});
  }

  goToItemDetail(id: string): void {
    this.router.navigate([`/items/${id}`]);
  }

  ngOnDestroy(): void {
    if (this.routeSubs) {
      this.routeSubs.unsubscribe();
    }
  }

}
