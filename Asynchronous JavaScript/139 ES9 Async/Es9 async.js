
//real example
const urls=[
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
];
 // const loopThroughUrls=(urls)=>
 // {
 //     for (url of urls)
 //     {
 //         console.log(url);
 //     }
 // }
 // loopThroughUrls(urls);

const getData=async function() {
    try {
        const [users, posts, albums] = await Promise.all(urls.map(async function () {
            const response = await fetch(urls);
            return response.json();
        }))

        console.log('users', users);
        console.log('users', posts);
        console.log('users', albums);
    } catch (error) {
        console.log(error);
    }
}

//for await of use

const getData2=async function()
{
    const ArrayOfPromises=urls.map(url=>fetch(url));
    for await (let request of ArrayOfPromises)
    {
        const data=await request.json();
        console.log(data);
    }
}