// Default parameter

// function userInfo(username, role ,them){
function userInfo(username = 'Default user', role  = 'Default role',them = 'Default them'){

     // username = username || 'Default user'
     // role = role || 'Default role'
     // them = them || 'Default them'
     
 return `Hello ${username} , your role is ${role}, website Them is : ${them}`
}

console.log(userInfo()); //`Hello undefined , your role is undefined, website Them is : undefined
console.log(userInfo())