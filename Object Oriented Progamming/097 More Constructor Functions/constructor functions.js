function Elf(name,weapon)
{
    //console.log(this);
    this.name=name;
    this.weapon=weapon;
    var a=5;
   // console.log(this);
}
Elf.prototype.attack=function ()
{
    return 'attack with'+this.weapon
}
Elf.prototype.build=function ()
{
    const self=this
    function building()
    {
        return self.name +' build a house';
    }
    //return building.bind(this);
    return building();
}

const peter=new Elf('Peter','Stones');
console.log(peter);
//peter.attack();
// console.log(peter.__proto__);
peter.build();

const sam=new Elf('Sam','fire');
//sam.attack();
//
// //using native Functions constructor
// const Elf1=new Function('name','weapon','this.name=name;\n' +
//     '    this.weapon=weapon;');
//
// const sarah=new Elf1('Sarah','fireworks');
// sarah