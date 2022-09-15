const solution = (N) => {

    for (let i = 0; i < N; i++) {
        if (N % i === 1) return i
    }
};

console.log(solution(10))