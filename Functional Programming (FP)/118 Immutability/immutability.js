const obj={name:'jubayer'}
function clone(obj)
{
    return {...obj};//pure function
}
function changeName(obj)
{
    const obj2={...obj}
    obj2.name='ahmed';
    return obj2;
}
console.log(changeName(obj));
console.log(obj);