import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';
import { HomeComponent } from './home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChildOneComponent } from './child-one/child-one.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent, ReactiveFormsModule, MockComponent(ChildOneComponent)]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should update control value', () => {
    const control = component.form.controls.firstName;
    control.setValue('Ee-Chee');
    expect(control.valid).toBeTrue();
    expect(control.value).toEqual('Ee-Chee');
  });

  it('should validate required field', () => {
    const control = component.form.controls.email;
    control.setValue('');
    expect(control.valid).toBeFalse();
    if(control.errors != null)
    expect(control.errors['required']).toBeTrue;
  });

  it('should call submitForm as form is valid', () => {
    const btn = fixture.nativeElement.querySelector('button[type="submit"]');
    expect(btn.disabled).toBeTrue();

    component.form.setValue({firstName: 'EC', lastName: 'Leng', email: 'ecleng@gmail.com'});
    fixture.detectChanges();
    expect(btn.disabled).toBeFalse();
   
    spyOn(component, 'onSubmit');
    btn.click();
    expect(component.onSubmit).toHaveBeenCalled();
  });
});
