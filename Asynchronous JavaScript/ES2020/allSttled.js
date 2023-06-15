const PromiseOne=new Promise((resolve,reject)=>{
    return setTimeout(resolve,600)
});
const PromiseTwo=new Promise((resolve, reject)=>
{
    return setTimeout(reject,300);
})

Promise.allSettled([PromiseOne,PromiseTwo]).then(console.log).catch((e)=>console.log('something failed',e))