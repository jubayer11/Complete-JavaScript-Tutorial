const array1=[0,3,4,31,76,189];
const array2=[4,6,30,38,78,600,700];

function mergeSorted(array1,array2)
{
    let length1=array1.length;
    let length2=array2.length;

    let newArray=[];
    let i=0;
    let j=0;
    while(i<length1 || j<length2)
    {
        if(array2[j]===undefined || array1[i]<array2[j])
        {

            newArray.push(array1[i]);
            i++;
            //console.log(i,newArray,'length1',length1);
        }
        else
        {
            newArray.push(array2[j]);
            j++;
            //console.log(j,newArray,'length2',length2);
        }
    }

    return newArray;


}

console.log(mergeSorted(array1,array2));



//another solution
function mergeSortedArrays(array1,array2)
{
    const mergedArray=[];
    let array1Item=array1[0];
    let array2Item=array2[0];
    let i=1;
    let j=1;
    if(array1.length===0)
    {
        return array2;
    }
    if(array2.length===0)
    {
        return array1;
    }
    while(array1Item || array2Item)
    {
        if(array2Item===undefined || array1Item<array2Item)
        {
            mergedArray.push(array1Item);
            array1Item=array1[i];
            i++;
        }
        else
        {
            mergedArray.push(array2Item);
            array2Item=array2[j];
            j++;
        }
    }

    return mergedArray;
}

console.log(mergeSortedArrays([0,3,4,31,6778.787],[4,6,30,1667,1677,16776,113256]));
