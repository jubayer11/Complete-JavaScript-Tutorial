// execute the same code for multiple object

function importantPerson()
{
    console.log(this.name);
}
name= 'Sunny';
const obj1={
    name:'casey',
    importantPerson:importantPerson
};

const obj2={
    name:'kamsin',
    importantPerson:importantPerson
};

importantPerson();
obj1.importantPerson();
obj2.importantPerson();
