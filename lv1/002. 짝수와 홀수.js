const solution = (N) => {

    const answer = N % 2 === 0 ? "Even" : "Odd";

    return answer;
};

console.log(solution(4))