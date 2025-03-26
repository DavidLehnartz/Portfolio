import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCraftComponent } from './my-craft.component';

describe('MyCraftComponent', () => {
  let component: MyCraftComponent;
  let fixture: ComponentFixture<MyCraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCraftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
