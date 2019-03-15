import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsTechsComponent } from './projects-techs.component';

describe('ProjectsTechsComponent', () => {
  let component: ProjectsTechsComponent;
  let fixture: ComponentFixture<ProjectsTechsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsTechsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsTechsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
