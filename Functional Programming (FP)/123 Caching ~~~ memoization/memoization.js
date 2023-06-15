
//normal
function addTo80(n)
{
    return n+80;
}
addTo80(5);
addTo80(5);
addTo80(5);


//memoization
let cache={};

function memoizedAddTo80(n)
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
memoizedAddTo80(5);
