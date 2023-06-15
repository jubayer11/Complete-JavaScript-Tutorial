
//1st example

function a()
{
    console.log('h1');
}

//2nd example
a.call();


const wizard={
    name:'Merlin',
    health: 50,
    heal(num1,num2)
    {
        return this.health=num1+num2;
    }
}

const archer= {
    name:'Jubayer',
    health:30,
}

console.log('1',archer);

//using call
wizard.heal.call(archer,50,50);
//using apply
wizard.heal.apply(archer,[50,50]);

//using bind
const healArcher=wizard.heal.bind(archer,50,50);
healArcher();
console.log('2',archer);

