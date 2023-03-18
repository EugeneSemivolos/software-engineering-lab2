const List = require("./List");

describe('Testing list based on an array', () => {
  test('Getting length of list', () => {
    const list = new List();
    list.append('n');
    list.append('o');
    list.append('d');
    list.append('e');
    expect(list.length()).toBe(4);
  });

  test('Adding an element', () => {
    const list = new List();
    list.append('f');
    list.append('o');
    list.append('x');

    expect(list.get(0)).toBe('f');
    expect(list.get(2)).toBe('x');
  });

  test('Inserting an element', () => { 
    const list = new List();
    list.append('n');
    list.append('o');
    list.append('d');
    list.append('e');
    
    list.insert('o', 1);
    list.insert('l', 4);

    expect(list.get(0)).toBe('n');
    expect(list.get(1)).toBe('o');
    expect(list.get(2)).toBe('o');
    expect(list.get(3)).toBe('d');
    expect(list.get(4)).toBe('l');
    expect(list.get(5)).toBe('e');
  });

  test('Deleting an element by index', () => {
    const list = new List();
    list.append('n');
    list.append('o');
    list.append('d');
    list.append('l');
    list.append('e');

    expect(list.delete(3)).toBe('l');
    expect(list.get(3)).toBe('e');
  });

  test('Deleting all specified elements', () => {
    const list = new List();
    list.append('f');
    list.append('e');
    list.append('e');
    list.append('d');

    list.deleteAll('e');

    expect(list.get(0)).toBe('f');
    expect(list.get(1)).toBe('d');
  });

  test('Getting an element by index', () => {
    const list = new List();
    list.append('f');
    list.append('o');
    list.append('o');
    list.append('d');

    expect(list.get(0)).toBe('f');
    expect(list.get(1)).toBe('o');
    expect(list.get(2)).toBe('o');
    expect(list.get(3)).toBe('d');
  });

  test('Cloning the list', () => {
    const list = new List();
    list.append('f');
    list.append('o');
    list.append('o');
    list.append('d');

    const clonedList = list.clone();

    expect(list).not.toBe(clonedList);
    clonedList.arr.forEach((value, index) => {
      expect(value).toBe(list.arr[index]);
    })
  });

  test('Reversing the list', () => {
    const list = new List();
    list.append('f');
    list.append('l');
    list.append('o');
    list.append('o');
    list.append('d');

    list.reverse();

    expect(list.get(0)).toBe('d');
    expect(list.get(1)).toBe('o');
    expect(list.get(4)).toBe('f');
  });

  test('Finding index of first element', () => {
    const list = new List();
    list.append('d');
    list.append('o');
    list.append('d');
    list.append('e');
    list.append('d');

    expect(list.findFirst('d')).toBe(0);
  });

  test('Finding index of last element', () => {
    const list = new List();
    list.append('d');
    list.append('o');
    list.append('d');
    list.append('e');
    list.append('d');

    expect(list.findLast('d')).toBe(4);
  });

  test('Clearing the list', () => {
    const list = new List();
    list.append('n');
    list.append('o');
    list.append('d');
    list.append('e');

    list.clear();

    expect(list.length()).toBe(0);
  });

  test('Extending existing list', () => {
    const list = new List();
    list.append('A');
    list.append('B');
    const extendingList = new List();
    list.append('C');
    list.append('D');

    list.extend(extendingList);

    expect(list.get(2)).toBe('C');
    expect(list.get(3)).toBe('D');
  });
});  