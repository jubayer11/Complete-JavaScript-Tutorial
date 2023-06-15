function findUser(user)
{
    return `found ${user.firstName}  ${user.lastName}`
}

const userData={
    firstName:`Jubayer`,
    lastName:'Ahmed'
}

for(let i=0;i<500;i++)
{
    findUser(userData);
}
