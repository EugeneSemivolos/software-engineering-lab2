import { List } from './List';

describe('Testing first implementation of List', () => {

  test('Check adding an element', () => {
    const list = new List();

    list.append('A');
    const result = list.get(0);

    expect(result).toBe('A');
  });

});