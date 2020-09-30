//Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

// Ex 1
// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]


var generate = function(numRows) {
    if(numRows===0){
		return [];
	} else if (numRows===1){
		return [[1]];
	} else if (numRows ==2){
		return [[1],[1,1]];
	}
	
	let pt = [[1],[1,1]];
	for(let i =2;i<numRows;i++){
		pt.push([1]);
		for(let j =0; j<pt[i-1].length-1;j++){
			let sum = pt[i-1][j]+pt[i-1][j+1];
			pt[i].push(sum);
		}
		pt[i].push(1);
	}
	return pt;
};

let rows = 5

console.log(generate(rows));
