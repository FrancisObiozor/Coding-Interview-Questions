//Given a singly linked list, determine if it is a palindrome.

//Example 1
// Input: 1->2
// Output: false

// Example 2
// Input: 1->2->2->1
// Output: true

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



var isPalindrome = function(head) {
	//Copy it to an array, then look at the ends of the array an work your way to the middle
	let palindrome = [];
	if(head === null){
		return true;
	}

	while(head != null){
		palindrome.push(head.val);
		head = head.next;
	}	

	let count = palindrome.length-1;
	for(let i = 0; i < palindrome.length/2; i++){
		if(palindrome[i] != palindrome[count]){
			return false
		}
		count--;
	}
	return true;
};


/*Inputs*/
// Input 1
// let head1 = new Node(1);
// append(2, head1);
// console.log(isPalindrome(head1));

//Input 2
let head2 = new Node(1);
append(2, head2);
append(2, head2);
append(1, head2);
console.log(isPalindrome(head2));
