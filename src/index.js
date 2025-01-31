import {HashMap} from "./HashMaps";


// const l1 = new LinkedList();
// const l1obj = {
//     key: "harry",
//     value:"27"
// }
// l1.append(l1obj);
// console.log(l1);

const test = new HashMap();
console.log(test);
test.set('Carlos', 'I am the old value');
test.set('Carlos', 'I am the new value');

test.set('dog', 'brown')
console.log(test.hash('dog'));
test.set('cat', 'browniesh')
console.log(test.has('cat'));

console.log(test);
console.log(test.hash('Carlaos'));
test.set('apple', 'red')
console.log(test.hash('apple'));
test.set('banana', 'yellow')
console.log(test.hash('banana'));
test.set('carrot', 'orange')
console.log(test.hash('carrot'));
console.log(test.get('apple'));
console.log(test.get('dog'));
console.log(test.hash('cat'))

console.log(test.has('dog'));
console.log(test.get('dog'));
// console.log(test.remove('dog'));
console.log(test.length());
// test.clear();
console.log(test.keys());
console.log(test)
// console.log(test.get('Carlos'));
// console.log(test.has('Carlos'));
// console.log(test.remove('Carlosa'));
// test.set('Carlos', 'I am the new again value');
// console.log(test.length());
// console.log(test);
// // ctest.hash('Carlos')