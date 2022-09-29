function solution(n) {
    /*
     calculation 실행시
     9, 18, 27, 36, 45 ...
     9의 배수가 리턴되며 해당 자리의 과일코드는 항상 'apple' 입니다

     const calculation = (value) => {
        const sum = [...value.toString()]
            .reduce((prev, curr) => parseInt(prev) + parseInt(curr), 0);

        const number = value - sum;
        return number >= 100 ? calculation(number) : "apple";
    };

     return calculation(n);
    */
    return "apple";
}

console.log(solution(325));