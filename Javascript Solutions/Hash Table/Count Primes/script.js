// Count the number of prime numbers less than a non-negative number, n.

// Input: 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

var countPrimes = function(n) {
    let primes =[];
    let totalPrimes = 0;
    
    if(n < 2){
        return 0;
    } 

    for(let i = 2;i < n;i++){
        primes[i] =true;
    }
    
    for(let i = 2; i < n; i++){
        if(primes[i]===true){
            for(let j = i*i; j <= n; j= j + i){
                primes[j] = false;
            }
        }
    }

    for(let i = 2;i < n;i++){
        if(primes[i]===true){
            totalPrimes++;
        }
    }

    return totalPrimes;
};

let n1 = 10;

let n2 = 100;

console.log(countPrimes(n1));
console.log(countPrimes(n2));

