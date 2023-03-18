const List = require("./List");

function main() {
  const list = new List();

  const phrase = 'Hello World!';
  console.log('Start list: \t\t', phrase);

  for (const char of phrase) {
    list.append(char);
  }
  list.deleteAll(' ');
  console.log('Deleted all spaces:\t', stringify(list));
  
  list.reverse();
  console.log('Reversed list:\t\t', stringify(list));

  const otherList = list.clone();
  otherList.reverse();
  console.log('Cloned reversed list:\t', stringify(otherList));

  list.extend(otherList);
  console.log('Extended list by other:\t', stringify(list));

  otherList.deleteAll('l');
  console.log('Deleted all "l":\t', stringify(otherList));

  otherList.delete(0);
  console.log('Deleted first symbol:\t', stringify(otherList));

  otherList.insert('С', 0);
  otherList.insert('l', 6);
  console.log('Inserted:\t\t', stringify(otherList));

  otherList.append('H');
  otherList.append('i');
  otherList.append('!');
  console.log('Appended:\t\t', stringify(otherList));

  otherList.insert('!', otherList.findFirst('!'));
  otherList.insert('o', otherList.findLast('o'));
  console.log('Used find First/Last:\t',stringify(otherList));
}
main();

function stringify(list) {
  let str = '';
  for (let i = 0; i < list.length(); i++) {
    str += list.get(i);
  }
  return str;
}