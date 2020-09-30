// Say you have an array for which the ith element is the price of a given stock on day i.
// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), 
//design an algorithm to find the maximum profit.
// Note that you cannot sell a stock before you buy one.

// Ex 1
// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//              Not 7-1 = 6, as selling price needs to be larger than buying price.

//Ex 2
// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.


var maxProfit = function(prices) {
    if(prices.length<=1){
		return 0;
	} 
	
	let maxProfit =0;
	for(let i = 0;i<prices.length-1;i++){
		for(let j=i+1; j<=prices.length-1;j++){
			if(prices[j]-prices[i]>maxProfit){
				maxProfit = prices[j]-prices[i];
			}
		}
	}
	return maxProfit;
};



let set1 = [7,1,5,3,6,4];
let set2 = [7,6,4,3,1];
let set3 = [2,1,4];

console.log(maxProfit(set1));
console.log(maxProfit(set2));
console.log(maxProfit(set3));
