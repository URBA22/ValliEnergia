import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentraleCardComponent } from './centrale-card.component';

describe('CentraleCardComponent', () => {
  let component: CentraleCardComponent;
  let fixture: ComponentFixture<CentraleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CentraleCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CentraleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
