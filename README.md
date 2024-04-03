# AngularTesting

- Karma is a test runner that executes tests in various browsers.
- Jasmine is a behavior-driven development (BDD) framework for writing test cases.
- BDD is an approach in software development that emphasizes the behavior of an application for business needs. Define expected user behaviors, run tests and lastly develop.
- Unit testing is a test of individual unit, usually a component in isolated environment.
- Integration testing is an interaction test of multiple units.

## Setup
- Dependencies are preinstalled as using ng new <project>.
- In the newer version of angular, karma.config.js is not available (test.ts as well). On terminal, use npx karma init to generate one. Then in angular.json -> test -> "karmaConfig": "karma.conf.js". However, this is unnecessary.

## Tests

### Unit Testing (isolated)

#### Component- signal input test
- see child-one spec

#### Component- interactions test with mock service
- see child-one spec

#### Component- interations test with template
- see child-one spec

#### Service- method test
- see example.service spec

#### Service- mock api request test
- see example.service spec

#### Service- fake async test
- see example.service spec


## References
https://medium.com/@rijuldahiya/mastering-karma-and-jasmine-in-angular-the-ultimate-guide-e24aaa06515