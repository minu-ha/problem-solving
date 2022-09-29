function solution(str) {
    const set = new Set(['a', 'e', 'i', 'o', 'u']);
    let count = 0;

    for (const char of str.toLowerCase()) {
        set.has(char) && count++;
    }

    return count;
}

console.log(solution("abracadabra"));