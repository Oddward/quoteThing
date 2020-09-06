import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteConfigComponent } from './quote-config.component';

describe('QuoteConfigComponent', () => {
  let component: QuoteConfigComponent;
  let fixture: ComponentFixture<QuoteConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
