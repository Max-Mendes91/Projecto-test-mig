/* 
// first assignment  : Values and Variables

let country = "Portugal";
let continent = "Europe";
let population = 1500000;

console.log(`I live in ${country} that is in ${continent} that have ${population}`);


// second assigment DATA TYPES

let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof country);
console.log(typeof population);
console.log(typeof language);

// third assignment : Let, const, var

language = 'portuguese';
const country = 'Portugal';
const continent = 'Europe';
let population = 150502502;
const isIsland = false;

// fourth assignment : Strings and template literals

console.log(population / 2);

population++;

console.log(population);
console.log(population > 6);
console.log(population >= 33)
const descreption1 = (`${country}` is in ${continent}, and it is ${population} people speaking ${language}!)
console.log(descreption1)



// Challange 1 BMI COMPARISSON

const massMark = 78;
const heightMark = 1.69;
const bmiMark = massMark / (heightMark * heightMark);
console.log(`${bmiMark}`)

const massJohn = 92;
const heightJohn = 1.95;
const bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(`${bmiJohn}`);

const markHigherBMI = bmiJohn > bmiMark;
console.log(markHigherBMI)

//fourth assignment if and else stataments

if(population > 33){
    console.log(`${country}'s population is above average!`);
}else {
    console.log(`${country}'s population is ${33 - population} million
    below average`); 
}

//CHALLENGE #2
const massMark = 78;
const heightMark = 1.69;
const bmiMark = massMark / (heightMark * heightMark);

const massJohn = 92;
const heightJohn = 1.95;
const bmiJohn = massJohn / (heightJohn * heightJohn);

const markHigherBMI = bmiJohn > bmiMark;
console.log(markHigherBMI)

let bmi;
if(markHigherBMI){
    bmi = bmiMark
} else{
    bmi = bmiJohn
}
console.log(`Mark's BMI ${bmi} is higher than John's ${bmi}!`)


//fifth assignment type conversion and Coercion

console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> '617'
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143


//6 assignment == vs === Equality operator

const numNeighbours = Number(prompt('How many neighbour countries does yout country have?'));



if (numNeighbours === 1){
    console.log('Only 1 border!')
} else if(numNeighbours > 2){
    console.log('More than 1 border')
} else{
    console.log('No borders')
}



// 7 assignemnt - Logical operators

const newCountry = 'Portugal';
const population = 50;
const language = 'English';
const isIsland = false; 

if (language && population === 50 && !isIsland){
    console.log('You should live in Portugal')
} else{
    console.log('Portugal does not meet your criteria :(')
}
    


// Challange 3
const scoreDolphins = (96 + 208 + 81) / 3
const scoreKoalas = (88 + 95 + 86) / 3
console.log(scoreDolphins, scoreKoalas)

if(scoreDolphins > scoreKoalas && scoreDolphins >= 100){
    console.log('Dolphins win!');
}else if( scoreKoalas > scoreDolphins && scoreKoalas >= 100){
    console.assertlog('Koalas win!')
}else if(scoreDolphins === scoreKoalas && scoreDolphins >= 100 & scoreKoalas >= 100){
    console.log('Both win!')
}else{
    console.log('No one wins the trophy!')
}


// 8 assignment - the switch statment

const language = 'spanish' ;

switch (language){
     case 'chinese':
     case 'manderin':
        console.log('MOST number of native speakers!')
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers')
        break;
     case 'english':
        console.log('3rd place')
        break;
    case 'hindi':
        console.log('Number 4')
        break;
    case 'arabic':
        console.log('5th most spoken language')
        break;
    default:
        console.log('Great language too :D')
     }

// 9 assignment - the Conditional (ternary) operator

const population = 33
population >= 33 ? console.log("Portugal's population is above average") : console.log("Portugal's population is below average");

const country = population >= 33 ? 'above average' : 'below average';
console.log(country);



//challange#4
const bill = 40;
const tip = (bill >= 50 && bill <= 300)  ? bill * 0.15  :  bill * 0.20 ;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`); */ 