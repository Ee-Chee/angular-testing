import { Injectable, inject } from '@angular/core';
import { apiBaseUrl, apiKey, headers } from '../constants/api-urls';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SampleEntry } from '../models/sample-entry.interface';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  http = inject(HttpClient);
  
  getLastName = (): string => 'Leng';

  getSampleEntries(): Observable<SampleEntry[]> {
    return this.http.get<SampleEntry[]>(`${apiBaseUrl}/home-start`, {headers: headers}).pipe(
      take(1),
    );
  }
}
