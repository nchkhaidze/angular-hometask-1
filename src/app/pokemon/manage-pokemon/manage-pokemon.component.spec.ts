import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePokemonComponent } from './manage-pokemon.component';

describe('ManagePokemonComponent', () => {
  let component: ManagePokemonComponent;
  let fixture: ComponentFixture<ManagePokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagePokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
