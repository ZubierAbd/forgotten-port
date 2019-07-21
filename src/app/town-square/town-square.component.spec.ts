import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TownSquareComponent } from './town-square.component';

describe('TownSquareComponent', () => {
  let component: TownSquareComponent;
  let fixture: ComponentFixture<TownSquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TownSquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TownSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
