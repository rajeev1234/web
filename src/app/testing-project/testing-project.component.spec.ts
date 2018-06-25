import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingProjectComponent } from './testing-project.component';

describe('TestingProjectComponent', () => {
  let component: TestingProjectComponent;
  let fixture: ComponentFixture<TestingProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
