const multiply=(a,b,c)=>a*b*c;
const partialMultiplyBy5=multiply.bind(null,5); // passing for parameter a

partialMultiplyBy5(4,10);