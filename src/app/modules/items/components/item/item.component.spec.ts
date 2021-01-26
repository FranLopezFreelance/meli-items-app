import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AmountPipe } from 'src/app/shared/pipes/amount.pipe';
import { ItemComponent } from './item.component';
import { Router } from '@angular/router';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;
  const routerSpy = {navigate: jasmine.createSpy('navigate')};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemComponent, AmountPipe ],
      imports: [ RouterTestingModule ],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should navigate to item`, () => {
    const id = 'MLA897952360';
    component.goToItemDetail(id);
    expect (routerSpy.navigate).toHaveBeenCalledWith(['/items/MLA897952360']);
  });

});
