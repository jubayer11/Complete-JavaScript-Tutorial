let str='Hi my name is jubayer';

function reverseString(str)
{
    str=str.split('');
    let i=0;
    let j=str.length-1;
    while(i<j)
    {
        let x= str[i];
        str[i]=str[j];
        str[j]=x;
        i++;
        j--;

    }
    return str.join('');

}
console.log(reverseString(str));


//different solution
let str='Hi my name is jubayer';
function reverse(str)
{
    if (!str || str.length<2 || typeof str !=='string')
    {
        return 'hmm that is not good'
    }

    const backwards=[];
    const length=str.length-1;
    for (let i=length; i>=0; i--)
    {
        backwards.push(str[i]);
    }
    console.log(backwards);
    return backwards.join('');
}
console.log(reverseString(str));

//more readable way by using javaScript builtin method

function reverse2(str)
{
    return str.split('').reverse().join('')
}
console.log(reverse2(str));


//using arrow function

const reverse3=(str)=>str.split('').reverse().join('');

console.log(reverse3(str));

//using spread operator
const reverse4=(...str)=>str.reverse().join('');

console.log(reverse3(str));