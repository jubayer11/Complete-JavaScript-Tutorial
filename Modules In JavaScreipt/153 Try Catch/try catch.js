function fail()
{
    try
    {

        throw new Error('oopsie');
        console.log('this works');
    }catch (error)
    {
        console.log('oops there is a error',error);
    } finally {
        console.log('still good');
    }
    console.log('I will never run');
}
fail();


//nested try catch

try
{
    try{
        something();
    }catch (e) {
        throw new Error(e);
    }
}catch (e) {
    console.log('got the error',e);
}

//with asynchronous code

try
{
    setTimeout(function ()
    {
        fakeavriable;
    },1000);

}
catch (e)
{
    console.log('I am not going to work with asynchronous code');
}
