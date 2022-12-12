// Description
// You are given a number stored in a variable with the following name,num
// You have to print all the even numbers greater than zero, and less than or equal to the value stored innum
// For example, if the value stored innum = 13, then the output will be
// 2
// 4
// 6
// 8
// 10
// 12
// Note : All the values need to be printed on a new line

//output
// 2
// 4
// 6
// 8
// 10
// 12

function moveTwoAheadII(num) {
    // Write code here
    console.log("num is ",num)
    console.log("It is a while loop");
    var i=1;
    while(i <= num){
        if(i%2==0){
            console.log(i);
        }
        i++;
    }
    console.log("---------------------");
    console.log("It is a for loop");
    for(i = 1 ; i <= num; i++){
        if(i%2==0){
            console.log(i)
        }
    }    
}

moveTwoAheadII(12)