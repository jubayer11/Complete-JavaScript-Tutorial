
//scope chain
 var x='l';
function  sayMyName()
{
    var a= 'a';
     return function findName(){
         var b='b';
         console.log(c);

         return function printName()
         {
             console.log(x)
             var c='c';
             return 'Jubayer Ahmed'

         }
     }

}

sayMyName()()();