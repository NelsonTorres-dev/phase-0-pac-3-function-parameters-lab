

// function add(num1, num2){
//     const value = num1 + num2
//     return value
// }

// const addMe = 5
// const mySum = 14 + 6
// let myValue = mySum +addMe

// console.log(myValue)



function introduction(name){
    const string = `Hi, my name is ${name}.` //create a variable so we can return later
    return string

}



//------------------------------------------------------------------------------------->

function introductionWithLanguage(name, language){
    const nameAndLanguage = `Hi, my name is ${name} and I am learning to program in ${language}.`
    return nameAndLanguage
}

const firstLanguage = introductionWithLanguage('Francisco', 'Python')
console.log(firstLanguage)

//-------------------------------------------------------------------------------------->

function introductionWithLanguageOptional(name, language = "JavaScript"){
    const defaultParameter = `Hi, my name is ${name} and I am learning to program in ${language}.`
    return defaultParameter
}

const result = introductionWithLanguageOptional("Nelson")
console.log(result)



/*
function pet(name, lastName){
    let activity = `Hello my name is ${name} ${lastName}, and I love running at the park.`
    return activity
}

const running = pet("Milan", "Torres");

console.log(running)

*/

// on the above example we declare a variable inside the function in order to return something, I also declare a second variable outside that way we can change it to anything we want.