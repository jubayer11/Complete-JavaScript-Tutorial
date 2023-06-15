//pass by reference object

let obj1={name:'Yao',password:'123'};
let obj2= obj1;

obj2.password='456';

console.log(obj1);
console.log(obj2);


//pass by reference array(which is also an object in javascript)

var c=[1,2,3,4,5,6];
//var d =c;
var x= [].concat(c);

//d.push(1654);
x.push(1654);

console.log(c);
//console.log(d);
console.log(x);

//absolutely copy with object . shallow clone and deep clone

let obj={a:'a',b:'b',c:{deep:'try and copy me'}};
//shallow clone
let clone=Object.assign({},obj);
let clone2={...obj}

//deep clone

let superClone=JSON.parse(JSON.stringify(obj));




obj.c.deep='copied';

console.log(obj);
console.log(clone);
console.log(clone2);
console.log(superClone);



