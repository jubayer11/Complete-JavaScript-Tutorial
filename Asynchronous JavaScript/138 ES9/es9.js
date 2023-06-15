const animals={
    tiger:23,
    lion:5,
    monkey:2
}

const {tiger,...rest}=animals;


//es6 array spread
const array=[1,2,3,4,5,6];
function sum(a,b,c,d,e,f)
{
return a+b+c+d+e+f;
}

sum(...array);

//es9 object
const animals={
    tiger:23,
    lion:5,
    monkey:2,
    bird:40,
}

const {tiger,lion,...rest}=animals;

function ObjectSpread(p1,p2,p3){
    console.log(p1);
    console.log(p2);
    console.log(p3);
}
ObjectSpread(tiger,lion,rest);