import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListartarefaComponent } from './listartarefa.component';

describe('ListartarefaComponent', () => {
  let component: ListartarefaComponent;
  let fixture: ComponentFixture<ListartarefaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListartarefaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListartarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
