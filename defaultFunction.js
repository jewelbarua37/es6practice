
// In ES6 function num2 = 20 default value is given
 
function add(num1, num2 = 20){
    // if(num2 == undefined){
    //     num2 = num2 || 0;
    // }
    
    return num1 + num2;
}

const total = add(15);
console.log(total);