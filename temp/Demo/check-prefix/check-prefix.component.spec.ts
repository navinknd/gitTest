import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckPrefixComponent } from './check-prefix.component';

describe('CheckPrefixComponent', () => {
  let component: CheckPrefixComponent;
  let fixture: ComponentFixture<CheckPrefixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckPrefixComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckPrefixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
