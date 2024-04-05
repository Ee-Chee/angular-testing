import { Component, inject, input } from '@angular/core';
import { ExampleService } from '../../services/example.service';
import { ExampleDirective } from '../../directives/example.directive';
import { SampleEntry } from '../../models/sample-entry.interface';

@Component({
  selector: 'app-child-one',
  standalone: true,
  imports: [ExampleDirective],
  templateUrl: './child-one.component.html',
  styleUrl: './child-one.component.scss'
})
export class ChildOneComponent {
  firstName = input<string>('unknown');     
  lastName = 'reveal name';
  entries: SampleEntry[] = [];
  errorMessage: string | undefined;

  serviceExample = inject(ExampleService);

  getLastName(): void {
    this.lastName = this.serviceExample.getLastName();
  }

  getSampleEntries(): void {
    this.serviceExample.getSampleEntries().subscribe({
      next: (entries) => {
        this.entries = entries; 
      },
      error: (err: string) => {
        this.errorMessage = err;
      }
    });
  }
}
