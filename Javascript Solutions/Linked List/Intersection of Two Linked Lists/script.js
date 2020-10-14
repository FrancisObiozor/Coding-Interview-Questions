// Write a program to find the node at which the intersection of two singly linked lists begins.

//Example 1
// Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
// Output: Reference of the node with value = 8
// Input Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect). From the head of A, it reads as [4,1,8,4,5]. 
// From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.

// Example 2
// Output: Reference of the node with value = 2
// Input Explanation: The intersected node's value is 2 (note that this must not be 0 if the two lists intersect). From the head of A, it reads as [1,9,1,2,4]. 
// From the head of B, it reads as [3,2,4]. There are 3 nodes before the intersected node in A; There are 1 node before the intersected node in B.

// Example 3
// Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
// Output: null
// Input Explanation: From the head of A, it reads as [2,6,4]. From the head of B, it reads as [1,5]. Since the two lists do not intersect, intersectVal must be 0, while skipA and 
// skipB can be arbitrary values.
// Explanation: The two lists do not intersect, so return null.


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
	return newNode;
}

function createIntersectingLinkedList(tail1, tail2, intersectingList) {
	tail1.next = intersectingList;
	tail2.next = intersectingList;
}


var getIntersectionNode = function (headA, headB) {
	let length1 = 0;
	let length2 = 0;
	let current1 = headA;
	let current2 = headB;

	while (current1 != null || current2 != null) {
		if (current1 != null) {
			length1++;
			current1 = current1.next;
		}
		if (current2 != null) {
			length2++;
			current2 = current2.next;
		}
	}

	if (length1 > length2) {
		let start = length1 - length2;
		let counter = 0;
		current1 = headA;
		current2 = headB;
		while (current1 != null && current2 != null) {
			if (counter >= start) {
				if (current1 === current2) {
					return current1;
				}
				
				current2 = current2.next;
			}
			current1 = current1.next;
			counter++;
		}
	} else if (length1 < length2) {
		let start = length2 - length1;
		let counter = 0;
		current1 = headA;
		current2 = headB;
		while (current1 != null && current2 != null) {
			if (counter >= start) {
				if (current1 === current2) {
					return current1;
				}
				
				current1 = current1.next;
			}
			current2 = current2.next;
			counter++;
		}
	} else {
		current1 = headA;
		current2 = headB;
		while (current1 != null && current2 != null) {
			if (current1 === current2) {
				return current1;
			}
			current1 = current1.next;
			current2 = current2.next;
		}
	}
};


/*Inputs*/
// Input 1
let head1 = new Node(4);
let tail1 = append(1, head1);

let head2 = new Node(5);
append(6, head2);
let tail2 = append(1, head2)
let tail2 = append(1, head2)

let intersectingList = new Node(8);
append(4, intersectingList);
append(5, intersectingList);

createIntersectingLinkedList(tail1, tail2, intersectingList);
console.log(getIntersectionNode(head1, head2));


//Input 2
// let head1 = new Node(1);
// append(9, head1);
// let tail1 = append(1, head1);

// let head2 = new Node(5);
// let tail2 = head2;

// let intersectingList = new Node(2);
// append(4, intersectingList);

// createIntersectingLinkedList(tail1, tail2, intersectingList)
// console.log(getIntersectionNode(head1, head2));

//Input 3
// let head1 = new Node(2);
// append(6, head1);
// append(4, head1);

// let head2 = new Node(1);
// append(5, head2);
// console.log(getIntersectionNode(head1, head2));

//Input 4
// let head1 = new Node(4);
// let tail1 = head1;

// let head2 = new Node(2);
// append(2, head2);
// append(4, head2);
// let tail2 = append(5, head2);

// let intersectingList = new Node(4);

// createIntersectingLinkedList(tail1, tail2, intersectingList);
// console.log(getIntersectionNode(head1, head2));

//Input 5
// let head1 = new Node(4);
// let tail1 = head1;

// let head2 = new Node(2);
// let tail2 = append(2, head2);

// let intersectingList = new Node(4);
// append(5, intersectingList);
// append(4, intersectingList);

// createIntersectingLinkedList(tail1, tail2, intersectingList);
// console.log(getIntersectionNode(head1, head2));