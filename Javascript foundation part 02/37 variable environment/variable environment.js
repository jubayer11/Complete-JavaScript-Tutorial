
//global execution content start
function  two()
{
    var isValid; // undefined on the memory
}

function one()
{
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