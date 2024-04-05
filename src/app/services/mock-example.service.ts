import { Observable, of} from "rxjs";
import { ExampleService } from "./example.service";
import { SampleEntry } from "../models/sample-entry.interface";
import { Injectable } from "@angular/core";

@Injectable()
export class MockExampleService extends ExampleService {
    override getLastName = (): string => 'mockLastName2';
    

    override getSampleEntries(): Observable<SampleEntry[]> {
        const testData = [{id: 1, created_at: ''}, {id: 2, created_at: ''}];

        return of(testData);
      }
}