import { ComponentFixture, TestBed } from '@angular/core/testing';
import PxlButtonComponent from './pxl-button.component';


describe('PxlButtonComponent', () => {
  let component: PxlButtonComponent;
  let fixture: ComponentFixture<PxlButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PxlButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PxlButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
