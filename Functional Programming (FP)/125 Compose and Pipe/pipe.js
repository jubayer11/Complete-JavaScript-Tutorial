//pipe
const pipe=(f,g)=>(data)=>g(f(data));
const multiplyBy3=(num)=>num*3;
const makePositive=(num)=>Math.abs(num);
const multiplyBy3AndAndAbsolute= pipe(multiplyBy3,makePositive)
multiplyBy3AndAndAbsolute(-50);

//difference between compose and pipe

//given function

fn1(fn2(fn3(50)))
//compose
compose(fn1,fn2,fn3)(50);
//pipe
pipe(fn3,fn2,fn1)(50);