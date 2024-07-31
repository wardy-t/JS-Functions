/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));
  

  /*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/


const isAdult = (x) => {
    if (x >= 18) {
        return "Adult";
    }   else {
        return "Minor"
    }
}

console.log('Exercise 2 Result:', isAdult(17));


/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

const isCharAVowel = (x) => {
    if (x === "a") {
        return true 
    } else if (x === "e") {
        return true 
    } else if (x === "i") {
        return true 
    } else if (x === "o") {
        return true 
    } else if (x === "u") {
        return true 
    } else {
        return false
    }
}

console.log('Exercise 3 Result:', isCharAVowel("o"));


/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/


const generateEmail = (username,domain) => {
   return `${username}@${domain}`

}

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/

const greetUser = (firstName, timeOfDay) => {
    return `Good ${timeOfDay}, ${firstName}!`
    
}

console.log('Exercise 5 Result:', greetUser("Tom", "afternoon"));


/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

const maxOfThree = (x, y, z) => {
    if (x >= y && x >= z) {
        return x;
    } else if (y>= x && y >= z) {
        return y;
    } else if (z >= x && z >= y) {
        return z 
    }
}
  


console.log('Exercise 6 Result:', maxOfThree(5, 5, 6));

/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/

const calculateTip = (billAmount, tipPercentage) => {
    return (billAmount / 100 * tipPercentage)
}

console.log('Exercise 7 Result:', calculateTip(100, 20));

/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/

const convertTemperature = (temp, scale) => {
    if (scale === "F") {
        return ((temp - 32) / 1.8)
    } else if (scale === "C") {
        return ((temp * 1.8) + 32)
    }    
}

console.log('Exercise 8 Result:', convertTemperature(32, "F"));


/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/

const basicCalculator = (x, y, calc) => {
    if (calc === "subtract") {
        return (x - y);
    } else if (calc === "add") {
        return (x + y);
    } else if (calc === "multiply") {
        return (x * y);
    } else if (calc === "divide") {
        return (x / y);
    }    
}

console.log('Exercise 9 Result:', basicCalculator(10, 5, "add"));

/*
Exercise 10: calculateGrade()

Define a function called calculateGrade. 
It should take a numerical score and return the corresponding letter 
grade (A, B, C, D, F). 

For example, 90 and above yields an 'A', 80-89 is a 'B', 
and 70-79 is a 'C', 60-69 is a 'D' and anything lower than a 60 is an 'F'.

Example: calculateGrade(100) should return A.

Complete the exercise in the space below:
*/



const calculateGrade = (grade) => {
    if (grade >= 90) {
        return "A";
    } else if (grade >= 80 && grade <= 89) {
        return "B";
    } else if (grade >= 70 && grade <= 79) {
        return "C";
    } else if (grade >= 60 && grade <= 69) {
        return "D";
    } else (grade < 60); {
        return "F"
    }
}

console.log('Exercise 10 Result:', calculateGrade(92));


/*
Exercise 11: createUsername()

Define a function called createUsername. 
It should take a first name and a last name and return a username. 

The username should be a combination of the following:
- The first three letters of the first name.
- The first three letters of the last name.
- The total character count of the first and last name combined.

Example: createUsername('Samantha', 'Green') should return 'SamGre13'.

Complete the exercise in the space below:
*/

const createUsername = (myName, surname) => {
    return (
        myName.substring(0, 3)+
        surname.substring(0, 3)+
        (myName.length+surname.length)
    )
}    

console.log('Exercise 11 Result:', createUsername("Ty", "Ng"));


/*
Exercise 12: numArgs()

Challenge yourself with numArgs. 
This function should return the count of arguments passed to it when called.

Complete the exercise in the space below:
*/

const numArgs = (...args) => {
    return args.length;
}


console.log('Exercise 12 Result:', numArgs(1, 2, 3, 4, 5, 6, 7));
