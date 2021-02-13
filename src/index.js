// REST OPERATOR
const calculateAverage = (thing, ...numbers) => {
    //return (numOne + numTwo) / 2
    let sum = 0
    numbers.forEach((num) => sum += num)
    const average = sum / numbers.length
    return `The average ${thing} is ${average}`
}

console.log(calculateAverage('age', 0, 100, 88, 64))

// Create printTeam that takes team name, coach, and players

// Team: Liberty
// Coach: Casey Penn
// Players: Marge, Aiden, Herbert, Sherry

const printTeam = (teamName, coach, ...players) => {
    console.log(`Team: ${teamName}`)
    console.log(`Coach: ${coach}`)
    console.log(`Players: ${players.join(', ')}`)
}

printTeam('Liberty', 'Casey Penn', 'Marge', 'Aiden', 'Herbert', 'Sherry')


// SPREAD OPERATOR
const team = {
    name : 'Liberdade',
    coach: 'Heuzin',
    players: ['Marcelo Moreno', 'Ricardo Goulard', 'Everton Ribeiro']
}

printTeam(team.name, team.coach, ...team.players)

const cities = ['Barcelona', 'Cape Town', 'Bordeaux']
const citiesCopy = [...cities, 'Santiago']

console.log(cities)
console.log(citiesCopy)

let house = {
    bedrooms: 2,
    bathrooms: 1.5,
    yearBuilt: 2017
}

let newHouse = {
    ...house,
    bedrooms: 5,
    kitchen: 2
}

console.log(house)
console.log(newHouse)

// OBJECT SPREAD OPERATOR
const person = {
    name: 'Matheus',
    age: '27'
}

const location = {
    city: 'Bridgeport',
    country: 'USA'
}

const overview = {
    ...person,
    ...location
}

console.log(overview)

// DESTRUCTING
const todo = {
    id: 'fasqqgerghehrew',
    text: 'Pay bills',
    completed: false
}

const { text:todoText, completed, details = 'No details provided', ...others } = todo

console.log(todoText)
console.log(completed)
console.log(details)
console.log(others)


// array
const age = [65, 0, 13]
const [firstAge, secondAge, , lastAge = 123] = age

console.log(firstAge)
console.log(lastAge)

// function
const printTodo =  ({ text, completed }) => {
    console.log(`${text}: ${completed}`)
}
printTodo(todo)