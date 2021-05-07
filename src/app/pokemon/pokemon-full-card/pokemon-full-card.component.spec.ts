import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonFullCardComponent } from './pokemon-full-card.component';

describe('PokemonFullCardComponent', () => {
  let component: PokemonFullCardComponent;
  let fixture: ComponentFixture<PokemonFullCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonFullCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonFullCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
