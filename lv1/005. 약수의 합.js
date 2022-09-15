const solution = (N) => {

    let sum = 0;

    for (let i = 0; i <= N; i++) N % i === 0 && (sum += i);

    return sum
};

console.log(solution(12))