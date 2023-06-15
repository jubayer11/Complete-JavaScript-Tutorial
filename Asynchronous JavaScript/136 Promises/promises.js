//callbacks

//Example-1

el.addEventListener("click",submitForm);

//callback pyramid of dom
//Example-2
movePlayer(100,'Left',function ()
{
    movePlayer(100,'Left',function ()
    {
        movePlayer(100,'Right',function ()
        {
            movePlayer(100,'Left',function ()
            {

            });
        });
    });
});


// callback twitter example

grabTweets('twitter/jubayerahmed',(error,jubayerAhmedTweets)=>
{
    if(error)
    {
        throw error;
    }
    displayTweets(jubayerAhmedTweets)

    grabTweets('twitter/elonMask',(error,ElonTweets)=>
    {
        if(error)
        {
            throw error;
        }
        displayTweets(ElonTweets)
        grabTweets('twitter/AnishGiri',(error,AnishTweets)=>
        {
            if(error)
            {
                throw error;
            }
            displayTweets(AnishTweets)
        })


    })
})


//example 2 with promises

movePlayer(100,'Left')
    .then(()=>movePlayer(400,'Left'))
    .then(()=>movePlayer(10,'Right'))
    .then(()=>movePlayer(330,'Left'))
