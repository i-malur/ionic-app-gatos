import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CpfPage } from './cpf.page';

describe('CpfPage', () => {
  let component: CpfPage;
  let fixture: ComponentFixture<CpfPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CpfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
