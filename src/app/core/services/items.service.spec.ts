import { fakeAsync, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ItemsService } from './items.service';
import { ITEM_DETAIL } from 'src/app/mocks/item-detail-response.mock';
import { environment } from 'src/environments/environment';
import { SEARCH_RESULTS } from 'src/app/mocks/searchResults-response.mock';

describe('ItemsService', () => {
  let service: ItemsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ItemsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve an item detail', fakeAsync(() => {
    const id = 'MLA897952360';
    const response = ITEM_DETAIL;

    service.getItemDetail(id)
      .subscribe(res => {
        expect(res).toEqual(response);
    });

    const mockReq = httpMock.expectOne(`${environment.baseURL}/items/${id}`);
    mockReq.flush(response);
  }));

  it('should retrieve 4 results', fakeAsync(() => {
    const query = 'telefonos';
    const response = SEARCH_RESULTS;

    service.getResults(query)
      .subscribe(res => {
        expect(res).toEqual(response);
        expect(res.items.length).toEqual(4);
    });

    const mockReq = httpMock.expectOne(`${environment.baseURL}/items?q=${query}`);
    mockReq.flush(response);
  }));
});
