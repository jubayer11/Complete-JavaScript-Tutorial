Date.prototype.lastYear=function ()
{
    return this.getFullYear()-1;
}
new Date('1900-10-10').lastYear();


console.log([1,2,3].map());
//out put should be 1o,2o,3o

Array.prototype.map=function ()
{
    let arr=[];
    for(let i=0;i<this.length;i++)
    {
        arr.push(this[i]+'o')
    }
    return arr;
}
console.log([1,2,3].map());