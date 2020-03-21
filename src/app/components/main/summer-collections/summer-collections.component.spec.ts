import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummerCollectionsComponent } from './summer-collections.component';

describe('SummerCollectionsComponent', () => {
  let component: SummerCollectionsComponent;
  let fixture: ComponentFixture<SummerCollectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummerCollectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummerCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
