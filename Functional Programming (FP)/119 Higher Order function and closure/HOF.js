//HOF function

const hof= ()=>()=>5;
hof()();

// HOF function
const hof=(fn)=>fn(5);
hof(function a(x){return x});


