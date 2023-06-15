
// this keyword giving access to their object

// obj.someFunc(this)
// {
//
// }



// function b()
// {
//     'use strict'
//     console.log(this);
// }
//
// function a()
// {
//
//     console.log(this);
// }



const obj = {
    name: 'jubayer',
    sing: function () {
        return 'lalala' + this.name;
    },
    singAgain() {
        return this.sing()+'!'
    }
};
obj.singAgain();