import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ItemDetailComponent } from './item-detail.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SearchBoxComponent } from 'src/app/core/components/search-box/search-box.component';
import { BreadcrumbComponent } from 'src/app/shared/components/breadcrumb/breadcrumb.component';
import { ItemsService } from 'src/app/core/services/items.service';
import { environment } from 'src/environments/environment';
import { ITEM_DETAIL } from 'src/app/mocks/item-detail-response.mock';
import { ConditionPipe } from 'src/app/shared/pipes/condition.pipe';
import { AmountPipe } from 'src/app/shared/pipes/amount.pipe';

describe('ItemDetailComponent', () => {
  let component: ItemDetailComponent;
  let fixture: ComponentFixture<ItemDetailComponent>;
  let itemsService: ItemsService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemDetailComponent, SearchBoxComponent,
        BreadcrumbComponent, ConditionPipe, AmountPipe ],
      imports: [ RouterTestingModule, HttpClientTestingModule ]
    })
    .compileComponents();
    itemsService = TestBed.inject(ItemsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display item detail', fakeAsync(() => {
    const id = 'MLA897952360';
    component.getItemDetail(id);
    const response = ITEM_DETAIL;
    const mockReq = httpMock.expectOne(`${environment.baseURL}/items/${id}`);
    mockReq.flush(response);
    fixture.detectChanges();
    expect(component.item).toEqual(response.item);
  }));

});
