import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyeventComponent } from './modifyevent.component';

describe('ModifyeventComponent', () => {
  let component: ModifyeventComponent;
  let fixture: ComponentFixture<ModifyeventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyeventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
