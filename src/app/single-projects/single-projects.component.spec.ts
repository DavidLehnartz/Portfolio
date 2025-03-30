import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProjectsComponent } from './single-projects.component';

describe('SingleProjectsComponent', () => {
  let component: SingleProjectsComponent;
  let fixture: ComponentFixture<SingleProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
