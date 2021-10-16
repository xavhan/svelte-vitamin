import {classnames} from './utils'

test('classnames', () => {
  expect(classnames('a', ['b', 'c'], {
    d: true,
    e: false,
  })).toBe('a b c d');
});
