const solution = (record) => {

    let answer = [];


    for (let i = 0; i < record.length; i++) {
        if (record[i].split(' ')[0] === 'Enter') {
            answer.push(record[i].split(' ')[2] + "님이 들어왔습니다")
        } else if (record[i].split(' ')[0] === 'Leave') {
            answer.push(record[i].split(' ')[1] + "님이 나갔습니다")
        }
    }

    return answer;
}

console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]));




