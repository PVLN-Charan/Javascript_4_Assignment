// Description
// Given a number, stored in the variable with the namenum
// Print the multiplication table of the value stored innum
// For example, if the value stored innumis 2, then the output should be
// 2
// 4
// 6
// 8
// 10
// 12
// 14
// 16
// 18
// 20
// Print each number, on a new line

//output 
// 3
// 6
// 9
// 12
// 15
// 18
// 21
// 24
// 27
// 30

function multiplicationTableN(num) {
    // Write code here
    console.log("num is ",num);
    console.log("It is a while loop");
    var i = 1;
    while(i <= 10){
        console.log(num*i);
        i++
    }
    console.log("---------------------");
    console.log("It is a for loop");
    for(var j = 1; j <= 10; j++){
        console.log(num*j);
        
    }
    
}

multiplicationTableN(3)