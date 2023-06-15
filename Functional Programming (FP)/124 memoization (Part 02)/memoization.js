//memoization with closure


function memoizedAddTo80()
{
    let cache={};
    return function (n)
    {
        if (n in cache)
        {
            return cache[n];
        }
        else
        {
            cache[n]=n+80;
            return cache[n];
        }
    }

}
const memoizationAddTo80=memoizedAddTo80();

memoizationAddTo80(5);