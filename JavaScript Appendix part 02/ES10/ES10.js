const array2=[[1,2],[3,4],[[4,5],[6,7]]];
console.log(array2);

const entries=['bob','sally',,,,,,'cindy']
entries.flat();


//flatMap()
const flatMap=array2.flatMap((value => {
    return value+'H';
}))
console.log(flatMap);



//remove space from start and end

const userEmail='     ahmedjubayer54@gmail.com     ';
console.log(userEmail.trimStart());
console.log(userEmail.trimEnd());


//form entries

userProfile=[['jubayer',26],['Anik',27],['Omi',27]];
Object.fromEntries(userProfile);


//try and catch

try
{
    bob
}
catch
{
    console.log('error');
}

let array=
    {'name':'hello',
    'age:':30,
    'petName':'don'
    };
Object.keys(array).forEach(key=>
{
    console.log(array[key]);
})




