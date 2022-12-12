// Description
// You are given a number, stored in a variable with the namenum
// Print all the odd numbers lesser than or equal to the value stored innum
// Only those numbers need to be printed which are greater than zero
// For example, given that the value stored innum = 12
// Therefore, the output will be
// 1
// 3
// 5
// 7
// 9
// 11


//ouput 
// 1
// 3
// 5
// 7
// 9
// 11
// 13

function moveTwoAhead(num) {
    // Write code here
    console.log("num is ",num)
    console.log("It is a while loop");
    var i=1;
    while(i <= num){
        if(i%2==1){
            console.log(i);
        }
        i++;
    }
    console.log("---------------------");
    console.log("It is a for loop");
    for(i = 1 ; i <= num; i++){
        if(i%2==1){
            console.log(i)
        }
    }
    
}

moveTwoAhead(13)