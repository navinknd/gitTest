import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRFComponent } from './create-rf.component';

describe('CreateRFComponent', () => {
  let component: CreateRFComponent;
  let fixture: ComponentFixture<CreateRFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateRFComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateRFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
