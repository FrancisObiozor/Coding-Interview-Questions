//Create a function that reverses a string:
//"Hi my name is Francis"

function reverse(str){
	let newStr = [];
	for(let i =0;i<str.length;i++){
		newStr[str.length-i]=str[i];
	}
	return newStr.join('');
}

let str = "Hi my name is Francis";
let reverseStr = reverse(str);
console.log(reverseStr);