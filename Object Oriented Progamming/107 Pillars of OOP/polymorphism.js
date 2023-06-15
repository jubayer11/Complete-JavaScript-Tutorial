class Character
{
    constructor(name,weapon)
    {
        this.name=name;
        this.weapon=weapon;
    }
    attack() {
        return 'attack with '+this.weapon;
    }
}
class Elf extends Character
{
    constructor(name,weapon,type) {
        super(name,weapon);
        this.type=type

    }

    attack(cry)
    {
        return 'attack with '+cry;
    }
}
class Ogre extends Character
{
    constructor(name,weapon,color) {
        super(name,weapon);
        this.color=color;

    }
    makeFort()
    {
        return 'strongest fort in the world'
    }
    attack()
    {
        super.attack();
        return 'arghhhhhh'
    }

}

const peter=new Elf('Peter','Stones','house');
console.log(peter.attack('weed'));

const shrek=new Ogre('Shrek','club','green');
console.log(shrek.attack());