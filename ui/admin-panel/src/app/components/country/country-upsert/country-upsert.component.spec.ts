import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryUpsertComponent } from './country-upsert.component';

describe('CountryUpsertComponent', () => {
  let component: CountryUpsertComponent;
  let fixture: ComponentFixture<CountryUpsertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountryUpsertComponent]
    });
    fixture = TestBed.createComponent(CountryUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
