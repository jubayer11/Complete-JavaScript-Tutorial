//parallel //Sequence  //race

const promisify=(item,delay)=>
    new Promise((resolve)=>
        setTimeout(()=>
          resolve(item),delay));

const a=()=>promisify('a',100);
const b=()=>promisify('b',5000);
const c=()=>promisify('c',3000);

//Parallel
async function parallel()
{
    const promises=[a(),b(),c()]
    const [outPut1,output2,output3]=await Promise.all(promises);
    return `parallel is done: ${outPut1} ${output2} ${output3}`
}

//parallel().then((data)=>{console.log(data)});
//same as upper line.
//parallel().then(console.log);

//race
async function race()
{
    const promises=[a(),b(),c()]
    const outPut1=await Promise.race(promises);
    return `race is done: ${outPut1}`
}

//race().then(console.log);

//sequence

async function sequence()
{
    const outPut1=await a();
    const output2=await b();
    const output3=await c();
    return `sequence is done ${outPut1} ${output2} ${output3}`
}
parallel().then(console.log);
sequence().then(console.log);
race().then(console.log);