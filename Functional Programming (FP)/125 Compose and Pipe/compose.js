//compose
const compose=(f,g)=>(data)=>f(g(data));
const multiplyBy3=(num)=>num*3;
const makePositive=(num)=>Math.abs(num);
const multiplyBy3AndAndAbsolute= compose(multiplyBy3,makePositive)
multiplyBy3AndAndAbsolute(-50);
