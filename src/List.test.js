const List = require("./LinkedList");

describe('Testing linked list', () => {
  test('Getting length of list', () => {
    const list = new List();
    list.append('n');
    list.append('o');
    list.append('d');
    list.append('e');
    expect(list.length()).toBe(4);
  });

  test('Adding elements', () => {
    const list = new List();
    list.append('f');

    expect(list.head).not.toBeNull();
    expect(list.head.next).toBe(list.head);
    expect(list.head.value).toBe('f');

    list.append('o');
    list.append('x');

    expect(list.head.next).not.toBe(list.head);
    expect(list.head.next.value).toBe('o');
    expect(list.head.next.next.value).toBe('x');
    expect(list.head.next.next.next).toBe(list.head);
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

    expect(list.delete(2)).toBe('l');
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
    list.append('A');
    list.append('B');

    const clone = list.clone();

    expect(clone.head).not.toBe(list.head);
    expect(clone.head?.next).not.toBe(list.head?.next);
    expect(clone.get(0)).toBe(list.get(0));
    expect(clone.get(1)).toBe(list.get(1));
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