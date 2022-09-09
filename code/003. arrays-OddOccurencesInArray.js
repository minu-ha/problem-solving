function solution(A) {

    const duplicate = A.filter((value, index) => A.indexOf(value) !== index);
    const answer = A.filter((value) => !duplicate.includes(value)).shift();

    return answer;
}

console.log(solution([9, 3, 9, 3, 9, 7, 9]));