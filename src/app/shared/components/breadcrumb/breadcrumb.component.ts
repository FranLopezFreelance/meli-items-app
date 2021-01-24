import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbComponent implements OnInit {

  @Input() categories!: string[];

  constructor() { }

  ngOnInit(): void {
  }

  verifyLast(i: number): string {
    return (this.categories && i === this.categories?.length - 1) ? 'shared__breadcrumbs__last' : '';
  }

}
