function solution(games) {

    let score = 0;

    games.forEach((game) => {
        const [homeScore, awayScore] = game.split(":");
        switch (true) {
            case homeScore > awayScore:
                score += 3;
                break;
            case homeScore === awayScore:
                score += 1;
                break;
        }
    })

    return score;
}

console.log(solution(["3:1", "2:2", "1:3"]));