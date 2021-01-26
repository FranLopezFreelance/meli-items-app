import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ResultsComponent } from './results.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { SearchBoxComponent } from 'src/app/core/components/search-box/search-box.component';
import { BreadcrumbComponent } from 'src/app/shared/components/breadcrumb/breadcrumb.component';
import { ItemsService } from 'src/app/core/services/items.service';
import { AmountPipe } from 'src/app/shared/pipes/amount.pipe';
import { SEARCH_RESULTS } from 'src/app/mocks/searchResults-response.mock';
import { environment } from 'src/environments/environment';
import { ItemComponent } from '../item/item.component';

describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;
  let router: Router;
  let itemsService: ItemsService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsComponent, SearchBoxComponent, ItemComponent,
        BreadcrumbComponent, AmountPipe ],
      imports: [ RouterTestingModule.withRoutes([]), HttpClientTestingModule ]
    })
    .compileComponents();
    router = TestBed.inject(Router);
    itemsService = TestBed.inject(ItemsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should navigate to item`, () => {
    const routerSpy = spyOn(router, 'navigate');
    const id = 'MLA897952360';
    component.goToItemDetail(id);
    expect(routerSpy).toHaveBeenCalledWith(['/items/MLA897952360']);
  });

  it('should display search results', fakeAsync(() => {
    const query = 'telefonos';
    component.getResults(query);
    const response = SEARCH_RESULTS;
    const mockReq = httpMock.expectOne(`${environment.baseURL}/items?q=${query}`);
    mockReq.flush(response);
    fixture.detectChanges();
    expect(component.items).toEqual(response.items);
  }));
});
