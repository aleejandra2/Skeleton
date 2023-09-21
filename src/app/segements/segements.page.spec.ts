import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SegementsPage } from './segements.page';

describe('SegementsPage', () => {
  let component: SegementsPage;
  let fixture: ComponentFixture<SegementsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SegementsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
