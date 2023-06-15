// import module1 from 'module1';
// import module2 from 'module2';


const harry='harry'
const voldemort='he who must not be named'

export function jump()
{

}

export default function fight(char1,char2)
{
    const attack1=Math.floor(Math.random()*char1.length);
    const attack2=Math.floor(Math.random()*char2.length);

    return attack1>attack2 ? `${char1} wins  ${attack1}`: `${char2} wins ${attack2}`;

}