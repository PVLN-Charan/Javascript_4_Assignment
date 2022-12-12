// Description

// You are given a number stored in a variable with the name num

// You have to print ttf services, as many times as the number stored in the variable num

// Every time, print  ttf services a new line

//output : 
            // ttf services
            // ttf services
            // ttf services
            // ttf services
            // ttf services

function printttfservices(num) {
    // Write code here
    var i = 1;
    console.log("It is a while Loop");
    while(i <= num){
        console.log("ttf services");
        i++;
    }
    console.log("-------------------------------");
    console.log("It is a for loop");
    for(var j = 1;j <= num; j++){
        console.log("ttf services");
    }
  
}

printttfservices(5)