import {HashMap} from "./HashMaps";
const test = new HashMap();
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('kite', 'pink0')
test.set('kite', 'pink1')
test.set('lion', 'golden')
test.set('lion', 'golden1')
test.set('lion', 'golden2')
test.set('moon', 'silver')
test.set('moon', 'silver2')
// test.set('moon', 'silver2')
// console.log(test.product)
console.log(test.entries().length);
console.log(test.get('lion'));
console.log(test.has('kite'));
console.log(test.remove('jacket'))
console.log(test.length());
console.log(test.keys());
console.log(test.values());
console.log(test.entries());
// test.clear()
console.log(test);