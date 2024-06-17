import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTFComponent } from './create-tf.component';

describe('CreateTFComponent', () => {
  let component: CreateTFComponent;
  let fixture: ComponentFixture<CreateTFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateTFComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateTFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
