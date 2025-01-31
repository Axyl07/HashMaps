export class HashMap {
  constructor() {
    this.buckets = new Array(16);
    let loadFactor = 0;
    let capacity = this.buckets.length;
    let index = 0;
    while (index < 16) {
      this.buckets[index] = new LinkedList();
      index++;
    }
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode %= 16;
    }

    return hashCode;
  }
  set(key, value) {
    const valueObj = {
      keyVal: key,
      valueVal: value,
    };
    const hashcode = this.hash(key);
    console.log(hashcode);
    let linkedListAtHashcode = this.buckets[hashcode];
    console.log(linkedListAtHashcode);
    if (linkedListAtHashcode.size() === 0) {
      linkedListAtHashcode.append(valueObj);
    } else {
      if (linkedListAtHashcode.contains(valueObj.keyVal)) {
        let returnedIndexOfNode = linkedListAtHashcode.find(valueObj.keyVal);
        let nodeAtRI = linkedListAtHashcode.at(returnedIndexOfNode);
        nodeAtRI.value.valueVal = value;
      } else {
        linkedListAtHashcode.append(valueObj);
      }
    }
  }
  get(key) {
    const hashcode = this.hash(key);
    const linkedListAtHashcode = this.buckets[hashcode];
    if (linkedListAtHashcode.contains(key)) {
      let returnedIndexOfNode = linkedListAtHashcode.find(key);
      let nodeAtRI = linkedListAtHashcode.at(returnedIndexOfNode);
      return nodeAtRI.value.valueVal;
    } else return null;
  }

  has(key) {
    const hashcode = this.hash(key);
    if (this.buckets[hashcode].contains(key)) {
      return true;
    } else return false;
  }
  remove(key) {
    const hashcode = this.hash(key);
    const linkedListAtHashcode = this.buckets[hashcode];
    if (linkedListAtHashcode.contains(key)) {
      const returnedIndexOfNode = linkedListAtHashcode.find(key);
      console.log(returnedIndexOfNode);
      if (returnedIndexOfNode === 0) {
        linkedListAtHashcode.pop();
        return true;//works
      }
      // const nodeAtRI = linkedListAtHashcode.at(returnedIndexOfNode);
      else if (returnedIndexOfNode !== 0) {
        linkedListAtHashcode.removeAt(returnedIndexOfNode);
        return true;
      }
    } else return false;
  }
  length() {
    let length = 0;
    
    for (let index = 0; index < this.buckets.length; index++) {
      if (index < 0 || index >= this.buckets.length) {
        throw new Error("Trying to access index out of bounds");
      }
      
      const LinkedListatIndex = this.buckets[index];
      length += LinkedListatIndex.size();
    }
    return length;
  }
  clear() {
    for (let index = 0; index < this.buckets.length; index++) {
      this.buckets[index] = new LinkedList();
    }
  }
  keys() {
    let array = [];
    for (let index = 0; index < this.buckets.length; index++) {
      if (this.buckets[index].head!=null) {
        for (let i = 0; i < this.buckets[index].size(); i++) {
          const node = this.buckets[index].at(i);
          array.push(node.value.keyVal);
          
        }
      }
      
    }
    return array;
  }
  values() {
    let array = [];
    for (let index = 0; index < this.buckets.length; index++) {
      if (this.buckets[index].head!=null) {
        for (let i = 0; i < this.buckets[index].size(); i++) {
          const node = this.buckets[index].at(i);
          array.push(node.value.valueVal);
          
        }
      }
      
    }
    return array;
  }
  entries() {
    let array = [];
    for (let index = 0; index < this.buckets.length; index++) {
      if (this.buckets[index].head!=null) {
        for (let i = 0; i < this.buckets[index].size(); i++) {
          const node = this.buckets[index].at(i);
          array.push([node.value.keyVal, node.value.valueVal]);          
        }
      }
      
    }
    return array
  }
}

export class LinkedList {
  head = null;
  append(value) {
    if (this.head == null) this.head = new Node(value, null);
    else {
      let temp = this.head;
      while (temp.nextNode != null) temp = temp.nextNode;
      temp.nextNode = new Node(value, null);
    }
  }
  prepend(value) {
    if (this.head == null) {
      this.head = new Node(value, null);
    } else {
      let newNode = new Node(value, this.head);
      this.head = newNode;
    }
  }

  size() {
    if (this.head === null) {
      return 0;
    } else {
      let length = 1;
      let temp = this.head;
      while (temp.nextNode != null) {
        temp = temp.nextNode;
        length++;
      }
      return length;
    }
  }
  Head() {
    return this.head;
  }
  tail() {
    let temp = this.head;
    while (temp.nextNode != null) temp = temp.nextNode;
    return temp;
  }
  at(index) {
    let i = 0;
    let temp = this.head;
    while (temp.nextNode != null) {
      i++;
      if (i === index) {
        return temp;
      }
      temp = temp.nextNode;
    }
    return temp;
  }
  pop() {
    if (this.head.nextNode === null) {
      this.head = null;
    }
    
    else {
      let temp = this.head;
      while (temp.nextNode.nextNode != null) temp = temp.nextNode;
      temp.nextNode = null;
    }
  }

  contains(value) {
    let temp = this.head;
    if (temp.nextNode != null) {
      let temp = this.head;
      while (temp.nextNode != null) {
        if (temp.value.keyVal === value) {
          return true;
        }
        temp = temp.nextNode;
      }
      if (temp.value.keyVal === value) {
        return true;
      } else return false;
    } else {
      if (temp.value.keyVal === value) {
        return true;
      } else return false;
    }
  }
  find(value) {
    let i = 0;
    let temp = this.head;
    if (temp.nextNode === null) {
      return 0;
    }
    else {
      while (temp.nextNode != null) {
        if (temp.value.keyVal === value) {
          return i;
        }
        else {
          temp = temp.nextNode;
          i++;
        }
      }
      if (temp.value.keyVal === value) {
        return i;
      }
      else return null;
    }
  }
  toString() {
    let temp = this.head;
    let string = "";
    while (temp.nextNode != null) {
      string += ` ( ${temp.value} ) -> `;
      temp = temp.nextNode;
    }
    string += ` ( ${temp.value} ) -> null `;
    return string;
  }
  insertAt(value, index) {
    let i = 0;
    let temp = this.head;
    while (temp.nextNode != null) {
      i++;
      if (i === index) {
        const newNode = new Node(value, temp.nextNode);
        temp.nextNode = newNode;
      }
      temp = temp.nextNode;
    }
    if (i === index) {
      const newNode = new Node(value, temp.nextNode);
      temp.nextNode = newNode;
    }
  }
  removeAt(index) {
    let i = 0;
    let prevNode = this.head;
    let currentNode = this.head.nextNode;
    if (currentNode.nextNode===null) {
      prevNode.nextNode = currentNode.nextNode
    }
    else {
      while (currentNode.nextNode != null) {
        i++;
        if (i === index) {
          prevNode.nextNode = currentNode.nextNode;
        }
        prevNode = prevNode.nextNode;
        currentNode = currentNode.nextNode;
      }
    }
  }
}

export class Node {
  value = null;
  nextNode = null;
  constructor(value, nextNode) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
