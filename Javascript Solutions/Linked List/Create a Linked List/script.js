
//Create a linked list with 3 functions:
//Append, Prepend, and Insert

class LinkedList {
	constructor(value) {
	  this.head = {
		value: value,
		next: null
	  };
	  this.tail = this.head;
	  this.length = 1;
	}
	
	append(value) {
	  let newNode = new Node(value);
	  this.tail.next =newNode;
	  this.tail = newNode;
	  this.length++;
	}
  }

  class Node{
	  constructor(value){
		this.value = value;
		this.next =null;
	  };
  }
  
  let myLinkedList = new LinkedList(10);
  myLinkedList.append(5);
  myLinkedList.append(16);