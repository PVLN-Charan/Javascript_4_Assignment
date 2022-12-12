// Description
// You are given a number, stored in a variable with the namenum
// Find the sum of all odd numbers, greater than 0, and less than or equal to the value stored innum
// Finally, print the sum
// For example, if the value stored innum = 5
// Then, all the odd numbers smaller than 5, will be
// 1
// 3
// 5
// Therefore, the sum becomes,sum = 1 + 3 + 5 = 9, which is the required output


//output : 16

function oddSumBelowN(num) {
    // Write code here
    // console.log(num);
    var sum = 0,i=1;
    console.log("-------------------------\nIt is a while loop");
    while(i <= num){
        if(i % 2 == 1){
            sum = sum + i;
        }
        i++;
    }
    console.log(sum)
    console.log("-------------------------\nIt is a for loop");
    var sum = 0;
    for(var i = 1; i <= num; i++){
        if(i % 2 == 1){
            sum = sum + i
        }
    }
    console.log(sum);
    
}

oddSumBelowN(7)