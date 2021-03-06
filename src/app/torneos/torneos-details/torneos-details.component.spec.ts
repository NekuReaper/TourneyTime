import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorneosDetailsComponent } from './torneos-details.component';

describe('TorneosDetailsComponent', () => {
  let component: TorneosDetailsComponent;
  let fixture: ComponentFixture<TorneosDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TorneosDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TorneosDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
