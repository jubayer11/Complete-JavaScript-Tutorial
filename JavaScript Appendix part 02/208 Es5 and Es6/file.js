//destructing

const obj={
    player:'bobby',
    experience:100,
    wizardLevel:false
};

// const player=obj.player;
// const experience=obj.experience;
// let wizardLevel=false;

const {player,experience}=obj;
let {wizardLevel}=obj;

//Object Properties

const name='john snow';
const obj=
    {
        [name]:'hello',
        ['ray'+'smith']:'hello'
    }

    console.log(obj);


//object and property same
const a="simon";
const b=true;
const c={};

const obj={
    a,b,c
}


console.log(obj);


//default argument

function hello(name='jubayer', age=26)
{
    console.log(name,age);
}

hello();


//symbol type in JavaScript

var sym1=Symbol();
let sym2=Symbol('foo');
let sym3=Symbol('foo')

sym1==sym2


