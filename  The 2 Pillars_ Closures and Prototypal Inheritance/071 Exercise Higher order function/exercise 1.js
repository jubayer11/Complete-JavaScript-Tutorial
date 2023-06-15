const multiuplyBy=(num1)=>(num2)=>num1*num2;


const MultiplyByTwo=multiuplyBy(2);
const MultiplyByFive=multiuplyBy(5);
MultiplyByTwo(4);
MultiplyByTwo(10);
MultiplyByFive(5);
multiuplyBy(4)(6);