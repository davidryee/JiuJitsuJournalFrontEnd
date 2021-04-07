import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpponentsListComponent } from './opponents-list.component';

describe('OpponentsListComponent', () => {
  let component: OpponentsListComponent;
  let fixture: ComponentFixture<OpponentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpponentsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpponentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
