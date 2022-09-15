const solution = (N) => {


    return N.toString().split('')
        .reverse()
        .map((value) => parseInt(value));
};

console.log(solution(656434476))