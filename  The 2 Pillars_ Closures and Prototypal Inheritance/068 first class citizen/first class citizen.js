//first reason

//assigning to variable
var stuff=function (){}

//assigning to object property.
var x={
    hello:function () {}
}

//second reason
function a(fn)
{
    fn();
}

a(function ()
{
    console.log('hi there');
})

//third reason

function b()
{
    return function c(){console.log('bye')}
}
var d=b();
d();
