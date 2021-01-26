import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppEventsService } from '../../services/app-events.service';
import { SearchBoxComponent } from './search-box.component';

describe('SearchBoxComponent', () => {
  let component: SearchBoxComponent;
  let fixture: ComponentFixture<SearchBoxComponent>;
  let eventsService: AppEventsService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBoxComponent ],
      imports: [RouterTestingModule, FormsModule],
      providers: [AppEventsService]
    })
    .compileComponents();
    eventsService = TestBed.inject(AppEventsService);
    router = TestBed.inject(Router);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change the query property', fakeAsync(() => {
    eventsService.setInputSearch.emit('telefonos');
    expect(component.query).toBe('telefonos');
  }));

  it('should clear the query property', fakeAsync(() => {
    eventsService.clearInputSearch.emit();
    expect(component.query).toBe('');
  }));

  it(`should navigate to results`, () => {
    component.query = 'telefonos';
    const routerSpy = spyOn(router, 'navigate');
    component.search();
    expect (routerSpy).toHaveBeenCalledWith([ '/items' ], Object({ queryParams: Object({ search: 'telefonos' }) }));
  });
});
