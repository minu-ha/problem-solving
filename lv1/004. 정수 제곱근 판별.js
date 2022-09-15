const solution = (N) => {

    let number = Math.sqrt(N);

    return Number.isInteger(number) ? (number + 1) * (number + 1) : -1
};

console.log(solution(121))