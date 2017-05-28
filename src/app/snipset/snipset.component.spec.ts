import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnipsetComponent } from './snipset.component';

describe('SnipsetComponent', () => {
  let component: SnipsetComponent;
  let fixture: ComponentFixture<SnipsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnipsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnipsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
