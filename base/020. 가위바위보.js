const solution = (params) => {

    let answer = "";

    const {A, B} = params

    A.map((value, index) => {
        if (value === B[index]) answer += "D"
        else if (value === 1 && B[index] === 3) answer += "A"
        else if (value === 2 && B[index] === 1) answer += "A"
        else if (value === 3 && B[index] === 2) answer += "A"
        else answer += "B"
    })

    return answer;
}

console.log(solution({
    A: [2, 3, 3, 1, 3], B: [1, 1, 2, 2, 3]
}));

/*
가위바위보

A, B 두 사람이 가위바위보 게임을 합니다.
총 N번의 게임을 하여 A가 이기면 A를 출력하고,
B가 이기면 B를 출력합니다. 비길 경우에는 D를 출력합니다.
가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보로 정하겠습니다.

예를 들어 N=5이면
회수     12345
A의 정보  23313
B의 정보  11223
승자     ABABD

두 사람의 각 회의 가위, 바위, 보 정보가 주어지면 각 회를 누가 이겼는지 출력하는 프로그램을 작성하세요.

▣ 입력설명
첫 번째 줄에 게임 횟수인 자연수 N(1<=N<=100)이 주어집니다.
두 번째 줄에는 A가 낸 가위, 바위, 보 정보가 N개 주어집니다.
세 번째 줄에는 B가 낸 가위, 바위, 보 정보가 N개 주어집니다.
▣ 출력설명
각 줄에 각 회의 승자를 출력합니다. 비겼을 경우는 D를 출력합니다.

▣ 입력예제 1
5
23313
11223
▣ 출력예제 1
A
B
A
B
D
*/