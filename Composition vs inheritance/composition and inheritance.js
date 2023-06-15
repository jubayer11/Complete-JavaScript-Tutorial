function Elf(name,weapon,type)
{
    let elf={
        name,
        weapon,
        type
    }

    return getAttack(elf)
}

function getAttack(character)
{
    return Object.assign({},character,{attackFn:()=>{}})
}
//pseudo code
Elf=attack()+slee()
Ogre=attack()+makefort()+sleep()