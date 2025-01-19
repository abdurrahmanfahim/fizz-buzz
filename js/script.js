// Write a function that prints numbers from 1 to 50. For multiples of 3, print "Fizz" instead of the number. For multiples of 5, print "Buzz". For numbers that are multiples of both 3 and 5, print "FizzBuzz".

// loop created for 50.
for (let i = 1; i <= 50; i++ ) {

    // checking conditions for modulus of 3 & 5 both.
    if (i % 3 === 0 && i % 5 === 0) {

        console.log("FizzBuzz!");
        
    }
    // checking conditions for modulus of 3.
    else if (i % 3 === 0) {
        
        console.log("Fizz");
        
    }
    // checking conditions for modulus of 5.
    else if (i % 5 === 0) {

        console.log("Buzz!");
        
    }
    // printing others there are not that by else.
    else
    {
        console.log(i);
        
    }
    
}
