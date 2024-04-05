import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOneComponent } from './child-one.component';
import { ExampleService } from '../../services/example.service';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockExampleService } from '../../services/mock-example.service';
import { throwError } from 'rxjs';
import { ExampleDirective } from '../../directives/example.directive';

describe('ChildOneComponent 1', () => {
  let component: ChildOneComponent;
  let fixture: ComponentFixture<ChildOneComponent>;
  let exampleService: ExampleService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildOneComponent, ExampleDirective, HttpClientTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildOneComponent);
    exampleService = TestBed.inject(ExampleService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('test1: should initialize component with a default input value', () => {
    expect(component.firstName()).toEqual('unknown');
  });

  it('test2: should call service getLastName method on button click', () => {
    const mockLastName = 'mockLastName';
    const spy = spyOn(exampleService, 'getLastName').and.returnValue(mockLastName);
    component.getLastName();
    expect(spy).toHaveBeenCalled();
    expect(component.lastName).toEqual(mockLastName);
  });

  it('test3: should trigger event on button click', () => {
    const button = fixture.debugElement.query(By.css('button'));
    const spy = spyOn(exampleService, 'getLastName');
    button.triggerEventHandler('click', null);
    expect(spy).toHaveBeenCalled();
  });

  it('test4: should catch api error', () => {
    const mockErrorMessage = 'Bad request';
    spyOn(exampleService, 'getSampleEntries').and.returnValue(throwError(() => mockErrorMessage));
    component.getSampleEntries();
    expect(component.errorMessage).toEqual(mockErrorMessage);
  });

  it('test5: should test the change of background color with directive', () => {
    const elem = fixture.debugElement.query(By.css('.directive-example'));

    elem.triggerEventHandler('mouseover', null);
    fixture.detectChanges();
    expect(elem.nativeElement.style.backgroundColor).toBe('blue');
    elem.triggerEventHandler('mouseout', null);
    fixture.detectChanges();
    expect(elem.nativeElement.style.backgroundColor).toBe('red');
  });
});

describe('ChildOneComponent 2', () => {
  let component: ChildOneComponent;
  let fixture: ComponentFixture<ChildOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildOneComponent, HttpClientTestingModule],
      providers: [{ provide: ExampleService, useClass: MockExampleService }],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('test1: should update lastName when getLastName called', () => {
    component.getLastName();
    expect(component.lastName).toEqual('mockLastName2');
  });

  it('test2: should update entries array value when getSampleEntries called', () => {
    component.getSampleEntries();
    expect(component.entries.length).toEqual(2);
    expect(component.entries).toEqual([{id: 1, created_at: ''}, {id: 2, created_at: ''}]);
  });
});
