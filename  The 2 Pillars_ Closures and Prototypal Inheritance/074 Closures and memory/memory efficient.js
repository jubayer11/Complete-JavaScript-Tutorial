//not memory efficient function
function heavyDuty(index)
{
    const bigArray=new Array(700).fill('smiley');
    console.log('created');
    return bigArray[index];


}

heavyDuty(687);
heavyDuty(687);
heavyDuty(687);
heavyDuty(687);


//memory efficient function
function heavyDuty2()
{
    const bigArray=new Array(700).fill('smiley');
    console.log('created again');
    return function (index)
    {
        return bigArray[index];
    }


}
const getHeavyDuty=heavyDuty2();
getHeavyDuty(688);
getHeavyDuty(400);
getHeavyDuty(677);