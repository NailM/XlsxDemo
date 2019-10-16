import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilelistpageComponent } from './filelistpage.component';

describe('FilelistpageComponent', () => {
  let component: FilelistpageComponent;
  let fixture: ComponentFixture<FilelistpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilelistpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilelistpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
