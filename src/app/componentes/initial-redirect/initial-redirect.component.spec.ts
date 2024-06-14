import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialRedirectComponent } from './initial-redirect.component';

describe('InitialRedirectComponent', () => {
  let component: InitialRedirectComponent;
  let fixture: ComponentFixture<InitialRedirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitialRedirectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InitialRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
