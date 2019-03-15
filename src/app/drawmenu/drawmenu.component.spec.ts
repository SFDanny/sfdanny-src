import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawmenuComponent } from './drawmenu.component';

describe('DrawmenuComponent', () => {
  let component: DrawmenuComponent;
  let fixture: ComponentFixture<DrawmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
