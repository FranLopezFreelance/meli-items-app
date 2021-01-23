import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { SearchComponent } from './components/search/search.component';
import { ResultsComponent } from './components/results/results.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { ItemComponent } from './components/item/item.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [SearchComponent, ResultsComponent, ItemDetailComponent, ItemComponent],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    SharedModule
  ]
})
export class ItemsModule { }
