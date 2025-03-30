import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectWillyTheWizardComponent } from './project-willy-the-wizard.component';

describe('ProjectWillyTheWizardComponent', () => {
  let component: ProjectWillyTheWizardComponent;
  let fixture: ComponentFixture<ProjectWillyTheWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectWillyTheWizardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectWillyTheWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
