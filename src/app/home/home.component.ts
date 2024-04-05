import { Component, OnInit, inject } from '@angular/core';
import { ChildOneComponent } from './child-one/child-one.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserForm } from '../models/user.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ChildOneComponent, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  fB = inject(FormBuilder);

  // https://angular.io/guide/typed-forms
  form: FormGroup<UserForm> = this.fB.nonNullable.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
  });

  onSubmit() { }
}
