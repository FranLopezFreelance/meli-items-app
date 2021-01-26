import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { of, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AppEventsService } from 'src/app/core/services/app-events.service';
import { ItemsService } from 'src/app/core/services/items.service';
import { IItemResponse } from 'src/app/models/IItemResponse';
import { Item } from 'src/app/models/IItemResponse';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html'
})
export class ItemDetailComponent implements OnInit, OnDestroy {

  item!: Item;
  categories!: string[];
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
    // Limpio el buscador sin ponerle foco
    this.eventsService.clearInputSearch.emit(false);
    // Obtengo el id por URL
    this.routeSubs = this.route.paramMap.subscribe( params => {
      const id = params.get('id');
      if (!id) {
        // Si no hay Id, redirijo al root
        this.router.navigate(['/']);
      } else {
        // Si hay Id llamo al servicio
        this.getItemDetail(id);
      }
    });
  }

  getItemDetail(id: string): void {
    this.itemsService.getItemDetail(id).subscribe((response: IItemResponse | any) => {
      this.item = response.item;
      this.categories = response.categories;
      // Seteo el título y metatags de la página
      this.setTitleAndMeta();
    }, () => {
      alert('Ha ocurrido un error. ');
      this.router.navigate(['/']);
    });
  }

  setTitleAndMeta(): void {
    this.titleService.setTitle(`${this.item.title} | MercadoLibre.com.ar`);
    this.metaService.updateTag({name: 'description', content: `${this.item.description}.`});
  }

  ngOnDestroy(): void {
    if (this.routeSubs) {
      this.routeSubs.unsubscribe();
    }
  }

}
