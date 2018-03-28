import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaCategoryComponent } from './schema-category.component';

describe('SchemaCategoryComponent', () => {
  let component: SchemaCategoryComponent;
  let fixture: ComponentFixture<SchemaCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchemaCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemaCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
