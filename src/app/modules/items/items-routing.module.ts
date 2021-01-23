import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from 'src/app/modules/items/components/search/search.component';
import { ResultsComponent } from 'src/app/modules/items/components/results/results.component';
import { ItemDetailComponent } from 'src/app/modules/items/components/item-detail/item-detail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: SearchComponent },
  { path: 'items', component: ResultsComponent },
  { path: 'items/:id', component: ItemDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
