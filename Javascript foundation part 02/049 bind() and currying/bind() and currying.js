
//function currying
function multiply(a,b)
{
    return a*b;
}
let multiplyBYTwo=multiply.bind(this,2);
let multiplyByTen=multiply.bind(this,10);

console.log(multiplyBYTwo(8));
console.log(multiplyByTen(8));