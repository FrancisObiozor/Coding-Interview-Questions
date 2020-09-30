//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

function firstRecurringCharacter(input){
	let tempArr = [];
	if(input.length == 0)	{
		console.log("Array has no values.");
	}else if(input.length == 1){
		console.log("There is only one value in the array.");

	} else{
		for(num of input){
			if(tempArr.includes(num)){
				debugger;
				return console.log(`The first reoccurring number is: ${num}`);
			}else{
				tempArr.push(num);
			}

		}
		return console.log("Undefined");
	}
} 

input1 =  [2,1,1,2,3,5,1,2,4];
input2 =  [2,3,4,5];
input3 = [2,5,5,2,3,5,1,2,4];

firstRecurringCharacter(input1);
firstRecurringCharacter(input2);
firstRecurringCharacter(input3);


