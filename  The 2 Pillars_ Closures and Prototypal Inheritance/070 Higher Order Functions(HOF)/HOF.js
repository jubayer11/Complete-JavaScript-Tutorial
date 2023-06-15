//normal function
function letAdamLogin()
{
    let array=[];
    for(let i=0;i<100000;i++)
    {
        array.push(i);
    }
    return 'Access Granted to adam'

}
function letAvaLogin()
{
    let array=[];
    for(let i=0;i<100000;i++)
    {
        array.push(i);
    }
    return 'Access Granted to adam'

}

letAdamLogin();
letAvaLogin();


// function with argument
const giveAccessTo=(user)=>
     'Access Granted to'+ user;




function letUserLogin(user)
{
    let array=[];
    for(let i=0;i<100000;i++)
    {
        array.push(i);
    }
    return giveAccessTo(user)
}

function letAdminLogin(admin)
{
    let array=[];
    for(let i=0;i<500000;i++)
    {
        array.push(i);
    }
    return giveAccessTo(user)
}

letUserLogin('Adam');
letUserLogin('Eva');

letAdminLogin('jubayer');


//Higher order function

const giveAccessTo=(user)=>
    'Access Granted to'+ user;

function authenticate(person,verify)
{

    let array=[];
    for(let i=0;i<verify;i++)
    {
        array.push(i);
    }
    return giveAccessTo(person.name);
}
function sing(person)
{
    return 'la la la la my name' +person.name
}


function letPerson(person,fn) //we are telling what data to use and what function to use.
{
 if(person.level==='admin')
 {
     return fn(person,500000);
 }
 else if(person.level==='user')
 {
     return fn(person,100000)
 }


}

letPerson({level:'user',name:'Tim'},authenticate);

letPerson({level:'admin',name:'Jubayer'},authenticate);

letPerson({level:'admin',name:'Jubayer'},sing);