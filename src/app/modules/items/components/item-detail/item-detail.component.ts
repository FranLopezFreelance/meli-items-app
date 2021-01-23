import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AppEventsService } from 'src/app/core/services/app-events.service';
import { ItemsService } from 'src/app/core/services/items.service';
import { IItemResponse } from 'src/app/models/IItemResponse';
import { Item } from 'src/app/models/IItemResponse';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html'
})
export class ItemDetailComponent implements OnInit {

  item!: Item;
  categories!: string[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemsService: ItemsService,
    private eventsService: AppEventsService,
  ) { }

  ngOnInit(): void {
    // Limpio el buscador sin ponerle foco
    this.eventsService.clearInputSearch.emit(false);
    // Obtengo el id por URL
    this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id') || null;
        if (id) {
          // Obtengo el item por id
          return this.itemsService.getItemDetail(id);
        } else {
          return of(false);
        }
      })
    ).subscribe((response: IItemResponse | any) => {
      if (!response) {
        this.router.navigate(['/']);
      } else {
        this.item = response.item;
        this.categories = response.categories;
      }
    }, (error) => {
      console.log(error);
    });
  }

}
