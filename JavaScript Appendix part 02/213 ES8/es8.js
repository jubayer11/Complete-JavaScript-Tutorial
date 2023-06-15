'Turtle'.padStart(10);
'turtle'.padEnd(10);


// Object.values()
// Object.entries()
// Object.keys();


const Obj=
    {
        name:'jubayer',
        age:26,
        sex:'male',
    }
// Object.keys();
    Object.keys(Obj).forEach((key,index)=>
    {
        console.log(key,Obj[key],index);
    })
// Object.values()
Object.values(Obj).forEach(value => {
    console.log(value);
})


// Object.entries()

Object.entries(Obj).forEach(value => {
    console.log(value);
})

//Object.entries using map

Object.entries(Obj).map((value)=>
{
    return value[1];
})



