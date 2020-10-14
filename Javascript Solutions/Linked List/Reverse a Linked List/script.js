// Reverse a singly linked list.


//Example
// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL



class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	};
}

function append(value, node) {
	let current = node;

	while (current.next != null) {
		current = current.next;
	}

	let newNode = new Node(value);
	current.next = newNode;
}


var reverseList = function(head) {
	if(head == null){
        return null;
    }
    
    let first = head;
	let second = first.next;
	let count = 0;

	while(second != null){
		if (count == 0){
			let third = second.next;
			first.next = null;
			second.next = first;
			first = second;
			second = third;
			count++;
		} else{
			let third = second.next;
			second.next = first;
			first = second;
			second = third;
			count++;
		}	
	}
	return first;
};
/*Inputs*/
//Input 1
let head = new Node(1);
append(2, head);
append(3, head);
append(4, head);
append(5, head);

console.log(reverseList(head));

