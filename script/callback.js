// 변수의 값이 될 수 있는가 ? 1급시민 : 2급시민

// 콜백함수 -> 함수가 다른함수의 입력값으로 입력되고 함수에 의해 실행될 떄
// 익명함수

words = ['spray', 'limit', 'exuberant', 'destruction']
newWords = words.filter((word) => word.length > 5)

console.log(newWords)

//