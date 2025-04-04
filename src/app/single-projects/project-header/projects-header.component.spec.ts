import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsHeaderComponent } from './projects-header.component';

describe('ProjectsHeaderComponent', () => {
  let component: ProjectsHeaderComponent;
  let fixture: ComponentFixture<ProjectsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
