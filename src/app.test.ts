import {increaseCount} from './app';

test('should increase 0 to 1', () => {
  expect(increaseCount(0)).toBe(1);
});
