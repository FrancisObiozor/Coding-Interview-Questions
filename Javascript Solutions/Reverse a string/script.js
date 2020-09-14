//Create a function that reverses a string:
//"Hi my name is Francis"

function reverse(str){
	if(!str){
		return console.log("Please provide a valid string.")
	}else if(str.length < 2){
		return console.log("The string has only 1 character so its already reversed.")
	}
		
	let newStr = [];
	for(let i =0;i<str.length;i++){
		newStr[str.length-i]=str[i];
	}
	return newStr.join('');
}

let str1 = "Hi my name is Francis";
let str2 = undefined;
let str3 = ["A"];

console.log(reverse(str1));
console.log(reverse(str2));
console.log(reverse(str3));
