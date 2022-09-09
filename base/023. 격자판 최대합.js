const solution = (...params) => {

    let answer = Number.MIN_SAFE_INTEGER;
    let columnSum = 0;
    let rowSum = 0;

    for (let i = 0; i < params.length; i++) {
        columnSum = 0;
        rowSum = 0;
        for (let j = 0; j < params.length; j++) {
            columnSum += params[i][j];
            rowSum += params[j][i];
        }
        answer = Math.max(answer, columnSum, rowSum);
    }
    columnSum = 0;
    rowSum = 0;
    for (let i = 0; i < params.length; i++) {
        columnSum += params[i][i]
        rowSum += params[i][params.length - i - 1]
    }
    answer = Math.max(answer, columnSum, rowSum);

    return answer;
}


console.log(solution([10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19]));

/*
격자판 최대합

N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합니다.

▣ 입력설명
첫 줄에 자연수 N이 주어진다.(1<=N<=50)
두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는다.
▣ 출력설명 최대합을 출력합니다.

▣ 입력예제 1
10 13 10 12 15
12 39 30 23 11
11 25 50 53 15
19 27 29 37 27
19 13 30 13 19
▣ 출력예제 1
155
*/