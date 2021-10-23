import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptojsComponent } from './cryptojs.component';

describe('CryptojsComponent', () => {
  let component: CryptojsComponent;
  let fixture: ComponentFixture<CryptojsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptojsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptojsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
