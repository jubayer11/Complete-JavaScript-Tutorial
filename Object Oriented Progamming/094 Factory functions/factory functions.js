const elf={
    name:'Jubayer',
    weapon: 'bow',
    attack()
    {
        return 'attack with'+ elf.weapon
    }
}
const elf2={
    name:'Sakib',
    weapon: 'bow',
    attack()
    {
        return 'attack with'+ elf.weapon
    }
}
elf.attack();
elf2.attack();


//factory function

function createElf(name,weapon)
{
    return
    {
        name,
        weapon,

        attack()
        {
            return 'attack with '+ weapon
        }
    }
}

const peter=createElf('Peter','Stones');
peter.attack();

const sam=createElf('Sam','fire');
sam.attack();

//manual process
const elfFunctions= {
    attack() {
        return 'attack with ' + this.weapon
    }
}
function createElf(name,weapon)
{
    return
    {
        name,
        weapon
    }
}

const peter=createElf('Peter','Stones');
peter.attack=elfFunctions.attack;

const sam=createElf('Sam','fire');
sam.attack=elfFunctions.attack;


//using inheritance


const elfFunctions= {
    attack() {
        return 'attack with ' + this.weapon
    }
}
function createElf(name,weapon)
{
    newElf=Object.create(elfFunctions);
    console.log(newElf.__proto__);
    newElf.name=name;
    newElf.weapon=weapon;
    return newElf;
}

const peter=createElf('Peter','Stones');
console.log(peter.attack());

const sam=createElf('Sam','fire');
console.log(sam.attack());