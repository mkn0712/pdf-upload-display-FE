import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfDisplaysComponent } from './pdf-displays.component';

describe('PdfDisplaysComponent', () => {
  let component: PdfDisplaysComponent;
  let fixture: ComponentFixture<PdfDisplaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PdfDisplaysComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PdfDisplaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
