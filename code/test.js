function solution(n, words) {
    let answer = [0, 0];
    let spliceWords = [];

    for (let i = 0; i < n; i++) {
        spliceWords.push(words.splice(0, n))
    }

    console.log(spliceWords)

    for (let i = 0; i < n; i++) {
        if (spliceWords[i][i].slice(-1) === spliceWords[i][i + 1].slice(0, 1)) {
            console.log("123")
        }
    }

    return answer;
}

console.log(solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]));