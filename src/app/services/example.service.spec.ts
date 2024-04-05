import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ExampleService } from './example.service';
import { apiBaseUrl } from '../constants/api-urls';
import { SampleEntry } from '../models/sample-entry.interface';

describe('ExampleService', () => {
  let service: ExampleService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ExampleService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('test1: should get last name', () => {
    expect(service.getLastName()).toEqual('Leng');
  });

  it('test2: should make a HTTP GET request', () => {
    // HttpTestingController intercepts the request using httpMock.expectOne() and 
    // respond with mocked data using req.flush().
    const testData = [{id: 1, created_at: ''}];
    service.getSampleEntries().subscribe(data => {
      expect(data).toEqual(testData);
    });
    const req = httpMock.expectOne(`${apiBaseUrl}/home-start`);
    expect(req.request.method).toBe('GET');
    req.flush(testData);
  });

  
  it('test3: fake async test example: looks async but is synchronous', fakeAsync(() => {
    let flag = false;
    setTimeout(() => {
      flag = true;
    }, 50000);
    expect(flag).toBe(false);
    tick(25000);
    expect(flag).toBe(false);
    tick(25000);
    expect(flag).toBe(true);
  }));
});
