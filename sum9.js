// Mod of 10 II Ended
// Description
// You are given a number stored in a variable with the name num
// Find out the value obtained from the expression i % 10, where i consists of all the values from 1 to the value stored in num, including num
// Input
// The first and the only line of the input contains the value stored in num
// Output
// Print the value obtained after doing the operation,i % 10, where i refers to all the values from 1 to the number stored in num,
// including that as well
// Note : Print all the values on a new line


//output 
// 1
// 2
// 3
// 4
// 5
// 6
// 7

function modeof10(num) {
    // Write code here
    // var num1=num;
    // console.log(num," ",num1)
    var i=1;
    while(i%10 <= num){
        console.log(i);
        i++;
    }
    console.log("-------------------------\nIt is a for loop");
    for(i = 1; i%10 <= num; i++){
        console.log(i)
    }

}

modeof10(7)