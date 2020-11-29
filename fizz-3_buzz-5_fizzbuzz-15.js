let fizzBuzz = (number) => {
    for (let i = 1; i <= number; i++) {
        if (i%3===0 && i%5===0) {
            console.log("fizzbuzz");
            ++i;
        } 
        if (i%3===0) {
            console.log("fizz");
            ++i;
        }   
        if (i%5===0) {
            console.log("buzz");
            ++i;
        } 
        if (i > number) {
            break;
        } 
        if (i%3===0) {
            console.log("fizz");
            ++i;
        } 
        if (i > number) {
            break;
        } 
        else {
            console.log(i)
        }
    }
}
fizzBuzz(25) // give any number