
//global execution content start

var x='hello';
function  two()
{
    console.log(x);
    var isValid; // undefined on the memory
}

function one()
{
    console.log(x);
    var isValid=true;
    two(); //new execution context
}
var isValid=false;

//new execution content start
one();


//stack

//two - undefined
//one - true
//global - false