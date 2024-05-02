# AngularTesting

- Karma is a test runner that executes tests in various browsers.
- Jasmine is a behavior-driven development (BDD) framework for writing test cases.
- BDD is an approach in software development that emphasizes the behavior of an application for business needs. Define expected user behaviors, run tests and lastly develop.
- Unit testing is a test of individual unit, usually a component in isolated environment.
- Integration testing is an interaction test of multiple units.
- Use ng-mocks when testing unit to filter out noise/irrelevant code blocks(components, services, etc.)
- toBeTrue() - Checks if the returned value is true
toBeTruthy() - Check if the value, when cast to a boolean, will be a truthy value
Truthy values are all values that aren't 0, '' (empty string), false, null, NaN, undefined or [] (empty array)*.
- End-to-end is used to test the functionality of a software application from start to end by simulating real-world user scenarios and behaviours, consuming live data.

## Tests

### Unit Testing
- isolated
- Dependencies are preinstalled as using ng new <project>.
- In the newer version of angular, karma.config.js is not available (test.ts as well). On terminal, use npx karma init to generate one. Then in angular.json -> test -> "karmaConfig": "karma.conf.js". However, this is unnecessary.
- Jasmine spyOn (spied-method): 
1. returnValue
return a mock value
2. callthrough
- real function is called and executed
3. fakecall
- fake call function and modify function body or logic
https://stackoverflow.com/questions/69708498/jasmine-callthrough-and-callfake
<spied-method>.toHaveBeenCalledWith(a, b) => passing arguements to the spied function

#### Component- form test
- see home spec -> HomeComponent

#### Component- signal input test
- see child-one spec -> ChildOneComponent 1, test 1

#### Component- interactions test with mock service's method 
- see child-one spec -> ChildOneComponent 1, test 2

#### Component- interations test with template
- see child-one spec -> ChildOneComponent 1, test 3

#### Component- catch mock api error
- see child-one spec -> ChildOneComponent 1, test 4

#### Component- directive test
- see child-one spec -> ChildOneComponent 1, test 5

#### Component- interactions test with mock service class
- see child-one spec -> ChildOneComponent 2, test 1 and test2

#### Service- method test
- see example.service spec -> ExampleService, test 1

#### Service- mock api request test
- see example.service spec -> ExampleService, test 2

#### Service- fake async test
- see example.service spec -> ExampleService, test 3

#### Pipe- test transform
- see example.pipe spec -> ExamplePipe, test 1

#### Test route guard
- see app spec

### E2E testing
- Setup: npm install cypress --save-dev, npx cypress open, select e2e testing, select browser.
In package.json, add script npx cypress open. Cypress supports javascript by default. In order to support typescript => https://docs.cypress.io/guides/tooling/typescript-support, create tsconfig.json in cypress folder. Ng serve first before rerunning npm script for e2e.
- Alternative preferably setup: ng add @cypress/schematic => https://www.npmjs.com/package/@cypress/schematic. Run ng e2e to start. Easier, no further configuration nor ng serve prior to that. 
npm scripts => Cypress run - headless, Cypress open - browser (dont use)
- check spec.cy.ts in cypress folder

### Test Ngrx Store
#### Test Selectors, Effects and Reducers
https://timdeschryver.dev/blog/testing-an-ngrx-project

#### Test Store in component
https://v7.ngrx.io/guide/store/testing

## References
ng-mocks => https://ng-mocks.sudo.eu/api/MockComponent
https://jasmine.github.io/tutorials/your_first_suite
https://codecraft.tv/courses/angular/unit-testing/jasmine-and-karma/
https://generic-ui.com/blog/mocking-dependencies-in-angular
https://medium.com/@rijuldahiya/mastering-karma-and-jasmine-in-angular-the-ultimate-guide-e24aaa06515
https://docs.cypress.io/guides/component-testing/angular/overview
