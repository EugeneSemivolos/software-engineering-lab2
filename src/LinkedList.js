class Node {
  constructor (value) {
    this.value = value;
    this.next = this;
  }
}

class LinkedList {
  constructor () {
    this.head = null;
  }

  length() {
    if (!this.head) return 0;
    let counter = 1;
    let current = this.head.next;
    while (current !== this.head) {
      current = current.next;
      counter++;
    }
    return counter;
  }

  append(element) {
    if (!this.head) {
      this.head = new Node(element);
      this.head.next = this.head;
    } else {
      let current = this.head.next;
      while (current.next !== this.head) {
        current = current.next;
      }
      current.next = new Node(element);
      current.next.next = this.head;
    }
  }

  insert(element, index) {
    if (index < 0 || index > this.length()) {
      throw new Error('Invalid number');
    }
    if (index === this.length()) {
      this.append(element);
      return;
    }
    if (index === 0) {
      const previous = this.getNode(this.length() - 1);
      const next = this.head;
      this.head = new Node(element);
      this.head.next = next;
      previous.next = this.head;
      return;
    }
    const previous = this.getNode(index - 1);
    const next = previous.next;
    previous.next = new Node(element);
    previous.next.next = next;
  }

  delete(index) {
    if (index < 0 || index > this.length() - 1) {
      throw new Error('Invalid number');
    }

    let value;

    if (this.length() === 1) {
      value = this.head.value;
      this.head = null;
    } else if (index === 0) {
      const last = this.getNode(this.length() - 1);
      const head = this.head;
      value = head.value;
      this.head = head.next;
      last.next = this.head;
    } else {
      const previous = this.getNode(index - 1);
      value = previous.next.value;
      previous.next = previous.next.next;
    }

    return value;
  }

  deleteAll(element) {
    let index = this.findFirst(element)
    while (index !== -1) {
      this.delete(index);
      index = this.findFirst(element);
    }
  }

  getNode(index) {
    if (index < 0 || index > this.length() - 1) {
      throw new Error('Invalid number');
    }

    let counter = 0;
    let current = this.head;
    while (counter < index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  get(index) {
    return this.getNode(index).value;
  }

  clone() {
    const list = new LinkedList()
    if (this.head) {
      let counter = 0;
      let current = this.head;
      const length = this.length();
      while (counter < length) {
        list.append(current.value);
        current = current.next;
        counter++;
      }
    }
    return list;
  }

  reverse() {
    if (!this.head || this.length() === 1) return;

    const lastIndex = this.length() - 1;
    const last = this.getNode(lastIndex);
    const newHead = new Node(last.value);
    let current = newHead;
    for (let i = lastIndex - 1; i >= 0; i--) {
      current.next = new Node(this.getNode(i).value);
      current = current.next;
    }

    this.head = newHead;
    current.next = this.head;
  }

  findFirst(element) {
    for (let i = 0; i < this.length(); i++) {
      if (this.get(i) === element) return i;
    }

    return -1;
  }

  findLast(element) {
    for (let i = this.length() - 1; i >= 0; i--) {
      if (this.get(i) === element) return i;
    }

    return -1;
  }
  clear() {
    this.head = null;
  }

  extend(elements) {
    if (!elements.head) return;

    const clone = elements.clone();
    if (!this.head) {
      this.head = clone.head;
    } else {
      const last = this.getNode(this.length() - 1);
      last.next = clone.head;
      clone.getNode(clone.length() - 1).next = this.head;
    }
  }
}

module.exports = LinkedList;