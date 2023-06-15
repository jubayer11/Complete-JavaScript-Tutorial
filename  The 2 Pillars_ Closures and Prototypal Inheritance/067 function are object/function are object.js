//first method
function one() {
    return 1
}

one();

//second way
const obj = {
    two: function () {
        return 2;
    }
}
obj.two();


//third way

function  three()
{
    return 3;
}
three.call();


//fourth way(not common)
const four= new Function('return 4')
const four= new Function('num','return num')

four(4);
four();

//067 function are object

function  hello()
{
    console.log('hello');
}
hello.yell='honey';




