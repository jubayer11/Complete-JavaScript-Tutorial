function Elf(name,weapon)
{
    this.name=name;
    this.weapon=weapon;
}
Elf.prototype.attack=function ()
{
    return 'attack with'+this.weapon
}
const peter=new Elf('Peter','Stones');
peter.name

const sam=new Elf('Sam','fire');
sam.attack();

//using native Functions constructor
const Elf1=new Function('name','weapon','this.name=name;\n' +
    '    this.weapon=weapon;');

const sarah=new Elf1('Sarah','fireworks');
sarah