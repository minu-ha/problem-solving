const solution = (N) => {


    return N.toString().split('').reduce((a, b) => a + Number(b), 0)
};

console.log(solution(987))