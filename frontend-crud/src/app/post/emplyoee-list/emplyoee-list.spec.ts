import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplyoeeList } from './emplyoee-list';

describe('EmplyoeeList', () => {
  let component: EmplyoeeList;
  let fixture: ComponentFixture<EmplyoeeList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmplyoeeList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmplyoeeList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
