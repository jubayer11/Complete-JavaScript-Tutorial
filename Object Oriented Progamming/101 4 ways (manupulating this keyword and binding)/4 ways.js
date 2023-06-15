//new binding
function Person(name,age)
{
    this.name=name;
    this.age=age;
}

const Person1=new Person('jubayer',26);

//implicit binding

const person2={
    name:'jubayer',
    age:26,
    h1()
    {
        console.log('h1'+this.name);
    }

}

//explicit binding

const person3={
    name:'jubayer',
    age:26,
    h1:function ()
    {
        console.log('h1'+this.setTimeout);
    }.bind(window)

}


//arrow function


const person4={
    name:'jubayer',
    age:26,
    h1:function ()
    {
        var inner=()=>
        {
            console.log('hi '+this.name);
        }
        return inner();
    }

}
person4.h1();