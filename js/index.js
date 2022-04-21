// Iteration 1: Names and Input //
const hacker1 = 'Elisa';
console.log(`The driver"s name is ${hacker1}`);

const hacker2 = 'Pepe';
console.log(`The navigator"s name is ${hacker2}`);


// Iteration 2: Conditionals //

if (hacker2.length > hacker1.length) {
    console.log(`The driver has the longest name, it has ${hacker2.length} characters.`);
}
else if (hacker2.length < hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker1.length} characters.`);
}
else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}

// Iteration 3: Loops //
const splittedName = hacker1.split('');
const nameWithSpaces = splittedName.join(' ');
const upperCaseNameWithSpaces = nameWithSpaces.toUpperCase();
console.log(upperCaseNameWithSpaces);

console.log(splittedName.reverse().join(' ')); 

//
const allNames = ['Pepe', 'Elisa'];
const orderNames = allNames.sort((a, b)=> {
  if (a > b) {
    console.log('The driver"s name goes first.')
  }
  else if (a < b) {
    console.log('Yo, the navigator goes first definitely.')
  }
  else (a = b) {
    console.log('What?! You both have the same name?')
  }
} 
) 