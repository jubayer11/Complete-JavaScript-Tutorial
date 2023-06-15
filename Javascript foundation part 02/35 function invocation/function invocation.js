l
//function Expression
var canada= function ()
{
    console.log('cold');
}

//function Declaration
function bangladesh()
{
    console.log('warm');
}

//function invocation/Call/Execution
canada();
bangladesh();

function  marry(person1,person2)
{
    //console.log(arguments);
    console.log(Array.from(arguments));
}

function marry2(...args)
{
    console.log(args);
}
marry2('jubayer','unknown');

marry('Jubayer','unknown');