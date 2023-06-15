async function playerStart()
{
    const firstMove=await movePlayer(100,'Left');
    await movePlayer(400,'Left');
    await movePlayer(10,'Right');
    await movePlayer(330,'Left');
}

//with fetch function


async function fetchUser()
{
    const response=await fetch("https://jsonplaceholder.typicode.com/users")
    const data= await response.json();
    console.log(data)
}

//real example
const urls=[
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
];
const getData=async function()
{
    try
    {
        const [users,posts,albums]=await Promise.all(urls.map(async
        function (){
            const response=await fetch(urls);
            return response.json();
        }))

        console.log('users',users);
        console.log('users',posts);
        console.log('users',albums);
    }
    catch(error)
    {
        console.log(error);
    }

}