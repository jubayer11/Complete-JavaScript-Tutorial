//Advanced Arrays


//foreach
const array=[1,2,3,4];

const double=[];

array.forEach(function (num)
{
    double.push(num*2);
})

console.log(double);



//map

const mapArray=array.map((num)=>
{
    return num*2;
})

console.log(mapArray);

//filter


const filterArray=array.filter(num=>
{
    return num>2;
})

console.log(filterArray);


//reduce

const reduceArray=array.reduce((accumulator,num)=>
{
    return accumulator+num;

},0)

console.log(reduceArray);
