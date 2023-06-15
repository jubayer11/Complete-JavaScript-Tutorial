//first way
// const obj =
//     {
//         name:'Billy',
//         sing()
//         {
//             console.log('a',this);
//             var anotherFunc= ()=>
//             {
//                 console.log('b',this);
//             }
//             anotherFunc();
//         }
//     }
//
// obj.sing();


//second way

// const obj =
//     {
//         name:'Billy',
//         sing()
//         {
//             console.log('a',this);
//             var anotherFunc=function ()
//             {
//                 console.log('b',this);
//             }
//             return anotherFunc.bind(this);
//         }
//     }
//
// obj.sing()();


//third way
const obj =
    {
        name:'Billy',
        sing()
        {
            console.log('a',this);
            var self=this;
            var anotherFunc=function ()
            {
                console.log('b',self);
            }
            anotherFunc();
        }
    }

obj.sing();
