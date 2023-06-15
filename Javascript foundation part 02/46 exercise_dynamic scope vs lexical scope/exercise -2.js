const obj =
     {
         name:'Billy',
         sing()
         {
             console.log('a',this);
             var anotherFunc=function ()
             {
                 console.log('b',this);
             }
             anotherFunc();
         }
     }

     obj.sing();