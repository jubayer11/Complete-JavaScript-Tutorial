//currying

// const multiply= (a,b)=>a*b;
const curriedMultiply=(a)=>(b)=>a*b;

// multiply(3,4);
const curriedMultiplyBY5=curriedMultiply(5);

//10 years

curriedMultiplyBY5(3);
