import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeLoaderComponent } from './coffee-loader.component';

describe('CoffeeLoaderComponent', () => {
  let component: CoffeeLoaderComponent;
  let fixture: ComponentFixture<CoffeeLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoffeeLoaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoffeeLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
