// Description
// You are given a number stored in a variable with the name num
// You have to print all the numbers from 1 to num, including num as well.
// Print each number on a new line

//output :
// 1
// 2
// 3
// 4
// 5
function loop1toN(num) {
    // Write code here
    console.log("It is a while loop")
    var i = 1;
    while(i <= num){
        console.log(i);
        i++;
    }
    console.log("---------------------");
    console.log(" it is a for loop");
    for(i=1; i<=num; i++ ){
        console.log(i)
    }

    
}
loop1toN(5)