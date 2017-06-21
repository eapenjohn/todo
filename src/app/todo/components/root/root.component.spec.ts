import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootComponent } from './root.component';

import {CreateComponent} from '../create';
import {ListComponent} from '../list';
import {FooterComponent} from '../footer';

import {TodoModule} from '../../';

describe('RootComponent', () => {
  let component: RootComponent;
  let fixture: ComponentFixture<RootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[TodoModule],
      declarations: [ ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
