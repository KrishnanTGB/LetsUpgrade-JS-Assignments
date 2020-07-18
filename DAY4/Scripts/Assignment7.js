console.log("Script Loaded For Day4 - Assignment7");

let n = Number(prompt("Enter any number to print the prime numbers upto that :"));

function printPrime(max)
{
    var store  = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) 
    {
        if (!store [i]) 
          {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) 
            {
                store[j] = true;
            }
        }
    }
    return `${primes}`;
}

console.log(printPrime(n));
