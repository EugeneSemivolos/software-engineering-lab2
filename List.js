class List {
  
  constructor (arr) {
    this.arr = [...arr];
  }

  length() {
    return this.arr.length;
  }

  append(element) {
    this.arr.push(element);
  }

  insert(element, index) {
    if (index < 0 || index > this.arr.length) {
      throw new Error('Invalid number');
    }

    this.arr.splice(index, 0, element);
  }

  delete(index) {
    if (index < 0 || index > this.arr.length - 1) {
      throw new Error('Invalid number');
    }

    return this.arr.splice(index, 1)[0];
  }

  deleteAll(element) {
    let index = this.arr.indexOf(element);
    while (index !== -1) {
      this.delete(index);
      index = this.arr.indexOf(element);
    }
  }

  get(index) {
    if (index < 0 || index > this.arr.length - 1) {
      throw new Error('Invalid number');
    }

    return this.arr[index];
  }

  clone() {
    return new List(this.arr);
  }

  reverse() {
    this.arr.reverse();
  }

  findFirst(element) {
    return this.arr.indexOf(element);
  }

  findLast(element) {
    return this.arr.lastIndexOf(element);
  }

  clear() {
    this.arr = [];
  }

  extend(elements) {
    this.arr = [...this.arr, ...elements];
  }
}