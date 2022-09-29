function solution(str) {

    const numbers = str.split(' ').map(Number);
    const indexMap = {
        even: 0,
        odd: 0
    };

    for (let i = 0; i < numbers.length; i++) {
        let isEven = !(numbers[i] % 2);
        if (indexMap.even && indexMap.odd) {
            return isEven ? indexMap.odd : indexMap.even;
        }
        indexMap[isEven ? 'even' : 'odd'] = i + 1;
    }

    return numbers.length;
}

console.log(solution("1 1 2 1"));