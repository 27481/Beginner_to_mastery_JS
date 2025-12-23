// Object inside array
// very usefull in real world application

const users=[
    {userId:1, firstName: 'utkarsh', gender:'male'},
    {userId:2, firstName: 'rohit', gender:'male'},
    {userId:3, firstName: 'nitin', gender:'male'},
];

for(let user of users){
    console.log(user.firstName);
}