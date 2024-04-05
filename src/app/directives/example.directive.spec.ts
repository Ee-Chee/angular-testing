import { ExampleDirective } from './example.directive';

xdescribe('ExampleDirective', () => {
  it('should create an instance', () => {
    const directive = new ExampleDirective();
    expect(directive).toBeTruthy();
  });
});
