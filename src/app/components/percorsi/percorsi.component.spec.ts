import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercorsiComponent } from './percorsi.component';

describe('PercorsiComponent', () => {
  let component: PercorsiComponent;
  let fixture: ComponentFixture<PercorsiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PercorsiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PercorsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
