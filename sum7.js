// Even Sum Below N Ended
// Description
// You are given a number, stored in a variable with the namenum
// Find the sum of all even numbers greater than zero, and less than or equal to the value stored innum
// For example, if the value stored innum = 5, then all the even numbers smaller than or equal to 5, and greater than zero are
// 2
// 4
// Therefore, the sum becomes,sum = 2 + 4 = 6, which is the required output

//output : 12

function evenSumBelowN(num) {
    // Write code here
    console.log("num is ",num);
    console.log("-------------------------\nIt is while Loop")
    var i = 1,sum=0;
    while(i <= num){        
        if(i%2==0){
            sum = sum+i;
        }
        i++;
    }
    console.log("Sum is ",sum);
    console.log("-------------------------\nIt is a for loop");
    sum = 0;
    for(i = 1; i <= num; i++){
        if(i % 2 == 0){
            sum = sum+i;
        }
    }
    console.log("Sum is ",sum)

  
}

evenSumBelowN(6)