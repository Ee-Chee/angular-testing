import { Component, inject, input } from '@angular/core';
import { ExampleService } from '../../services/example.service';

@Component({
  selector: 'app-child-one',
  standalone: true,
  imports: [],
  templateUrl: './child-one.component.html',
  styleUrl: './child-one.component.scss'
})
export class ChildOneComponent {
  firstName = input<string>('unknown');     
  lastName = 'reveal name';

  serviceExample = inject(ExampleService);

  getLastName(): void {
    this.lastName = this.serviceExample.getLastName();
  }
}
