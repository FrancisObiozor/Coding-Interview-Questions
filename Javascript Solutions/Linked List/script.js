
//Create a linked list with 4 functions:
//Append, Prepend, Insert, and Reverse

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

	prepend(value){
		let newNode = new Node(value);
		let temp = this.head;
		this.head = newNode;
		this.head.next = temp;
		this.length++;
	}

	insert(index, value){
		let newNode = new Node(value);
		let previous = this.head;
		let current = this.head;
		if(index == 0){
			this.prepend(value);
		} else{
			for(let i = 0; i<index; i++){
				previous = current;
				current = current.next;
			}
			previous.next = newNode;
			newNode.next = current;
			this.length++;
		}
	}

	reverse(){
		let current=this.head;
		let second=this.head.next;
		let third=this.head.next.next;
		
		this.tail = this.head;
		
		
		while(third != null){
			second.next = current;
			current = second;
			second = third;
			third = third.next;
		}
		second.next = current;
		this.head = second;
		this.tail.next = null;
		
	}
  }

  class Node{
	  constructor(value){
		this.value = value;
		this.next =null;
	  };
  }
  
  let myLinkedList = new LinkedList(10);
  myLinkedList.append(15);
  myLinkedList.append(16);
  myLinkedList.prepend(5);
  myLinkedList.insert(1,7);
  myLinkedList.reverse();