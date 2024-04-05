import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { routeGuard } from './services/permission.service';
import { MockComponent, MockComponents } from 'ng-mocks';
import { HomeComponent } from './home/home.component';
import { Route, provideRouter } from '@angular/router';
import { GetPermissionComponent } from './get-permission/get-permission.component';
import { ProtectedComponent } from './protected/protected.component';
import { provideLocationMocks } from '@angular/common/testing';
import { RouterTestingHarness } from '@angular/router/testing';
import { Location } from '@angular/common';

// import {RouterTestingModule} from "@angular/router/testing";
// RouterTestingModule is deprecated
// Use provideRouter or RouterModule/RouterModule.forRoot instead. 
// This module was previously used to provide a helpful collection of test fakes, 
// most notably those for Location and LocationStrategy. 
// These are generally not required anymore, as MockPlatformLocation is provided in TestBed by default. 
// However, you can use them directly with provideLocationMocks.

const mockRoute: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: MockComponent(HomeComponent),
  },
  {
    path: 'get-permission',
    component: GetPermissionComponent, // dont mock because it has the permission service injected which grants access
  },
  {
    path: 'protected',
    canActivate: [routeGuard],
    component: MockComponent(ProtectedComponent), 
  },
]

// https://dev.to/this-is-angular/testing-angular-routing-components-with-routertestingharness-providelocationmocks-and-providerouter-oi8

describe('AppComponent - routes testing', () => {
  let harness: RouterTestingHarness;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // no need to import components
      providers: [
        provideRouter(mockRoute), // fake components and define route guards
        provideLocationMocks, // mock Location
      ],
    }).compileComponents();

    // this will create app and home components as well initially
    // router-outlet is included here
    // check link above. It has more features
    harness = await RouterTestingHarness.create(); 
    location = TestBed.inject(Location);
  });

  it('should simulate route guard', fakeAsync(
    async () => {
      await harness.navigateByUrl('/');
      tick();
      expect(location.path()).toBe('/home');

      await harness.navigateByUrl('/protected');
      tick();
      expect(location.path()).toBe('/get-permission'); // access granted here

      await harness.navigateByUrl('/protected');
      tick();
      expect(location.path()).toBe('/protected');
    }
  ));
});
