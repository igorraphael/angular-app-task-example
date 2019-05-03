import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovatarefaComponent } from './novatarefa.component';

describe('NovatarefaComponent', () => {
  let component: NovatarefaComponent;
  let fixture: ComponentFixture<NovatarefaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovatarefaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovatarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
