//Closure
const closure=function()
{
    let count=0;
    return function increment()
    {
        count++;
        return count;
    }
}

const incrementFn=closure();

incrementFn();


//making data private using closure
const closure=function()
{
    let count=0;
    return function increment()
    {
        count++;
        return count;
    }
}

const incrementFn=closure();

incrementFn();