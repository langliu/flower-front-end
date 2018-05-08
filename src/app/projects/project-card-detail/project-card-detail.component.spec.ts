import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCardDetailComponent } from './project-card-detail.component';

describe('ProjectCardDetailComponent', () => {
  let component: ProjectCardDetailComponent;
  let fixture: ComponentFixture<ProjectCardDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectCardDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
