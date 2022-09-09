function solution(N) {

    let MAX = Number.MIN_SAFE_INTEGER;
    let binaryArray = N.toString(2).split(1);
    if (binaryArray.length < 3) return 0;
    binaryArray.forEach((binary) => binary.length >= MAX && (MAX = binary.length))

    return MAX;
}

console.log(solution(51712));