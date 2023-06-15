//call stack and memory heap
const number=610; //allocate memory for a number variable
const string='some text' //allocate memory for string
const human={  //allocate memory for object and it's values
    first:'jubayer',
    last:'ahmed',
}
function subtractTwo(num)
{
    return num-2;
}

function  calculate()
{
    const sumTotal=4+5;
    return subtractTwo(sumTotal);
}

calculate();