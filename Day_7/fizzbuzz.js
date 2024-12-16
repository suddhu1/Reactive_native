function fizzbuzz(a) {
    if (a % 3 === 0) {
        console.log("fizz");
        if (a % 5 === 0) {
            console.log("fizzbuzz");
            
        }
    }
    else if (a % 5 === 0) {
        console.log("buzz");    
        
    }
    else {
        console.log("not valid number ");
        
    }
    
}