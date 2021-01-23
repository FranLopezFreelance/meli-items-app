import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/ISearchResponse';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent implements OnInit {

  @Input() item!: Item;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToItemDetail(id: string): void {
    this.router.navigate([`/items/${id}`]);
  }

}
