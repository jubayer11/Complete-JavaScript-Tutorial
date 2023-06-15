let dragon={
    name:'tanya',
    fire:true,
    fight()
    {
        return 5;
    },
    sing()
    {
        if (this.fire)
        {
            console.log('I am '+this.name + ',the breather of fire');

        }
    }
}
let lizard={
    name:'kiki',
    fight()
    {
        return 1;
    }
}


//
// // using bind
//
// const singLizard=dragon.sing.bind(lizard);
// console.log(singLizard());
//
//
// //inherit ways
// lizard.__proto__=dragon;
// lizard.sing();
// lizard.fire;
// for (let prop in lizard)
// {
//     if (lizard.hasOwnProperty(prop))
//     {
//         console.log(prop);
//     }
//
// }
