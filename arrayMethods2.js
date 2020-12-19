
const superheroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" }]

const findSpiderMan = function (objet) {
    return objet.name === "Spiderman";
}

console.log(superheroes.find(findSpiderMan));

//----------------------------//-------------------------------------//

function doubleArrayValues(array) {
    return array.map((number) => {
        return number * 2
    });
}

console.log(doubleArrayValues([1, 2, 3]))

// result should be [2, 4, 6]
//----------------------------//-------------------------------------//
function containsNumberBiggerThan10(array) {
    array.forEach((number) => {
        if (number > 10) {
            let big = number;
            console.log(big.includes(number))
        }
    })


}
console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]))
// result should be true
containsNumberBiggerThan10([1, 2, 1, 2, 1, 2])
// result should be false
//----------------------------//-------------------------------------//

function isItalyInTheGreat7(array) {
    return array.includes('Italy')
}

console.log(isItalyInTheGreat7(['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States']))
// result should be true

//----------------------------//-------------------------------------//
function tenfold(array) {
    return tenTimes = array.forEach((number) => {
        return number * 10
        console.log(tenTimes)

    })
}
console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))
// result should be [10, 40, 30, 60, 90, 70, 110]
//----------------------------//-------------------------------------//
function isBelow100(array) {
    return array.some((number) => {
        return number =< 100
    })
}

console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98]))
// result should be: false

//----------------------------//-------------------------------------//

let bigSum = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]

const total = bigSum.reduce((number, totalSum) => {
    return number + totalSum
}, 0);
console.log(total)
// result should be 1118