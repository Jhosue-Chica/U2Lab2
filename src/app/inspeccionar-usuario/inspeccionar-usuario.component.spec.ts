import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspeccionarUsuarioComponent } from './inspeccionar-usuario.component';

describe('InspeccionarUsuarioComponent', () => {
  let component: InspeccionarUsuarioComponent;
  let fixture: ComponentFixture<InspeccionarUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InspeccionarUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspeccionarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
