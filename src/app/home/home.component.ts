import { Component } from '@angular/core';
import { ChildOneComponent } from './child-one/child-one.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ChildOneComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
