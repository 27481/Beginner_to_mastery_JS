// nested destructuring 

const users=[
    {userId:1, firstName: 'utkarsh', gender:'male'},
    {userId:2, firstName: 'rohit', gender:'male'},
    {userId:3, firstName: 'nitin', gender:'male'},
];

const [{firstName: user1firstName, userId}, ,{gender}]=users;
console.log(user1firstName);
console.log(gender);
console.log(userId);