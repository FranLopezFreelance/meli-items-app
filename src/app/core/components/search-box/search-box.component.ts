import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppEventsService } from '../../services/app-events.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('inputSearch', { static: false })
    inputSearch!: ElementRef<HTMLElement>;
  query = '';
  clearSubs!: Subscription;
  querySubs!: Subscription;

  constructor(
    private router: Router,
    private eventsService: AppEventsService
  ) { }

  ngOnInit(): void {
    this.querySubs = this.eventsService.setInputSearch.subscribe((query: string) => {
      this.query = query;
    });
  }

  ngAfterViewInit(): void {
    this.clearSubs = this.eventsService.clearInputSearch.subscribe((focus: boolean) => {
      this.query = '';
      if (focus) {
        this.inputSearch.nativeElement.focus();
      }
    });
  }

  search(): void {
    if (this.query.trim().length) {
      this.router.navigate(['/items'], { queryParams: { search: this.query }});
    } else {
      return;
    }
  }

  ngOnDestroy(): void {
    if (this.querySubs) {
      this.querySubs.unsubscribe();
    }
    if (this.clearSubs) {
      this.clearSubs.unsubscribe();
    }
  }

}
