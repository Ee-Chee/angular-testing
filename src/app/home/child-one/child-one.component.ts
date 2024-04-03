import { Component, inject, input } from '@angular/core';
import { ExampleService } from '../../services/example.service';
import { SampleEntry } from '../../models/sample-entry.interface';

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
  entries: SampleEntry[] = [];

  serviceExample = inject(ExampleService);

  getLastName(): void {
    this.lastName = this.serviceExample.getLastName();
  }

  getSampleEntries(): void {
    this.serviceExample.getSampleEntries().subscribe({
      next: (entries) => {
        this.entries = entries; 
      },
    });
  }
}
