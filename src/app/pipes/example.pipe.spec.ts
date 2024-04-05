import { ExamplePipe } from './example.pipe';

describe('ExamplePipe', () => {
  it('test 1: should transform array into string', () => {
    const pipe = new ExamplePipe();
    const transformedValue = pipe.transform(['Ee-Chee', 'Leng']);
    expect(transformedValue).toEqual('Ee-Chee Leng');
  });
});
