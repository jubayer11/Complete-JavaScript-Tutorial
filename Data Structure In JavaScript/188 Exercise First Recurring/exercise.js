//Google Question
//Given an array =[2,5,1,2,3,5,1,2,4];
//it should return 2

//given an array=[2,1,1,2,3,5,1,2,4];
//it should return 1

//Given an array=[2,3,4,5];
//it should return undefined


function findingRecurring(nums)
{
    let x=[];
    for(let i=0;i<nums.length;i++)
    {
        if(!x[nums[i]])
        {
            x[nums[i]]=1;
        }
        else
        {
            return nums[i];
        }
    }

    return undefined;
}

nums=[2,5,1,2,3,5,1,2,4];

console.log(findingRecurring(nums));

