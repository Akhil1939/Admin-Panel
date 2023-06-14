import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryListingComponent } from './country-listing.component';

describe('CountryListingComponent', () => {
  let component: CountryListingComponent;
  let fixture: ComponentFixture<CountryListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountryListingComponent]
    });
    fixture = TestBed.createComponent(CountryListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
