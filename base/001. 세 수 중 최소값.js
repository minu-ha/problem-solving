const solution = (a, b, c) => {

    let answer = a < b ? a : b;
    answer = answer < c ? answer : c;

    return answer;
}

console.log(solution(6, 5, 11));

/*
100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하세요.

▣ 입력설명
첫 번째 줄에 100이하의 세 자연수가 입력된다.
▣ 출력설명
첫 번째 줄에 가장 작은 수를 출력한다.

▣ 입력예제
1 6 5 11
▣ 출력예제
1 5
*/