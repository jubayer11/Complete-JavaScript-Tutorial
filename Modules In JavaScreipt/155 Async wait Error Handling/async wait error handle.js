(async function ()
{
    try
    {
        await Promise.reject('oopsie')
    }catch (e) {
        console.log('async wait wrror',err);
    }
    console.log('i will execute because i am after the try catch block');
})();