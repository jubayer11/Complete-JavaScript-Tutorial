function a()
{
    let grandpa='grandpa'
    return function b()
    {
        let father='father'
        let random=6575678
        return function c()
        {
            let son='son';
            return `${grandpa} > ${father} > ${son}`
        }
    }
}
a()()();

//another example
function boo(string)
{
    return function (name)
    {
        return function (name2)
        {
            console.log(`${string},${name},${name2}`);
        }
    }
}

boo('jubayer')('ahmed')('hello');

//using arrow function

const boo=(string)=>(name)=>(name2)=>
console.log(`${string},${name},${name2}`);

const booString=boo('hi');

//5 years
const booStringName=booString('hello');

//5 years

const booStringName2=booStringName('honey');

booStringName2;