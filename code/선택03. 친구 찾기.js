function solution(users) {

    const friends = [];
    users.forEach((user) => user.length === 4 && friends.push(user));
    
    return friends;
}

console.log(solution(["Ryan", "Kieran", "Mark"]));