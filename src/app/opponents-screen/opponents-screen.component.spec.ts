import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpponentsScreenComponent } from './opponents-screen.component';

describe('OpponentsScreenComponent', () => {
  let component: OpponentsScreenComponent;
  let fixture: ComponentFixture<OpponentsScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpponentsScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpponentsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
