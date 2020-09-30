// Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the 
//first two lists.

//Example
// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4



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




let mergeTwoLists = function (l1, l2) {

	if (l1 === null && l2 != null) {
		return l2;
	}

	if (l2 === null && l1 != null) {
		return l1;
	}

	if (l1 === null && l2 === null) {
		return null;
	}

	let temp = null;
	if (l1.val > l2.val) {
		temp = l1;
		l1 = l2;
		l2 = temp;
	}

	let currentL1 = l1;
	let currentL2 = l2;
	let nextL1 = currentL1.next;
	while (currentL1 != null && currentL2 != null) {
		
		if (currentL1.next == null && currentL2 != null) {
			currentL1.next = currentL2;
			return l1;
		} else if (currentL1.val <= currentL2.val && currentL1.next.val >= currentL2.val) {
			currentL1.next = currentL2;
			currentL2 = currentL2.next;
			currentL1.next.next = nextL1;
			currentL1 = currentL1.next;
		} else {
			currentL1 = currentL1.next;
		}
		nextL1=currentL1.next;
	}
	return l1;
};


/*Inputs*/
//Input 1
let l1 = new Node(1);
append(2,l1);
append(4,l1);

let l2 = new Node(1);
append(3,l2);
append(4,l2);

console.log(mergeTwoLists(l1, l2));

//Input 2
l1 = new Node(1);
append(2,l1);
append(4,l1);

l2 = new Node(1);
append(3,l2);
append(4,l2);
append(5,l2);
append(6,l2);

console.log(mergeTwoLists(l1, l2));