import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOneComponent } from './child-one.component';
import { ExampleService } from '../../services/example.service';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ChildOneComponent', () => {
  let component: ChildOneComponent;
  let fixture: ComponentFixture<ChildOneComponent>;
  let exampleService: ExampleService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildOneComponent, HttpClientTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildOneComponent);
    exampleService = TestBed.inject(ExampleService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should initialize component with a default input value', () => {
    expect(component.firstName()).toEqual('unknown');
  });

  it('should call service getLastName method on button click', () => {
    const mockLastName = 'mockLastName';
    const spy = spyOn(exampleService, 'getLastName').and.returnValue(mockLastName);
    component.getLastName();
    expect(spy).toHaveBeenCalled();
    expect(component.lastName).toEqual(mockLastName);
  });

  it('should trigger event on button click', () => {
    const button = fixture.debugElement.query(By.css('button'));
    const spy = spyOn(exampleService, 'getLastName');
    button.triggerEventHandler('click', null);
    expect(spy).toHaveBeenCalled();
  });
});
