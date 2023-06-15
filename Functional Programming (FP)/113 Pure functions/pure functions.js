//no side effects
//input--->output


//having side side effect

const array=[1,2,3];

function arr(arr)
{
    arr.pop();
}
function mutateArray(arr)
{
    arr.forEach(item=>
    {
        arr.push(1);
    })
}
arr(array);
mutateArray(array);
console.log(array);


//not having side effects
const array=[1,2,3];

function removeLastItem(arr)
{
    const newArray=[].concat(arr);
    newArray.pop();
    return newArray;
}
function multiplyByTwo(arr)
{
  return arr.map(item=>item*2)
}
console.log(array);
console.log(multiplyByTwo(array));
arr(array);
mutateArray(array);
console.log(array);

// is this a pure function? Answer: No

function a()
{
    console.log('hi');
}

//input-->output
function a(num1,num2)
{
    return num1*num2;
}


function b(num)
{
    return num*2;
}
b(a(3,4))