const friends =['rahim','karim','rahim'];

function getUnique(names){
    const uniqueFriends =[];
    for(let i=0; i<names.length; i++){
        const name = names[i];
        if(uniqueFriends.includes(name) === false){
            uniqueFriends.push(name);
        }
    }
    return uniqueFriends;
}
const output = getUnique(friends);
console.log(output);