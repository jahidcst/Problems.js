// Question-1: Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

function reverseString(value) {
  let reversedString = "";
  for (let i = value.length - 1; i >= 0; i--) {
    reversedString += value[i];
  }
  return reversedString;
}


let word = "jahid hasan";
console.log(reverseString(word));


// Question-2: Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

  function sumPositiveNumbers(array){
    let sum = 0;
    for (let number of array){
        if(number > 0){
            sum += number;
        }
    }
    return sum;
  }
  
  let numbers = [2, 5, 3, -8, 9, -3, -2, 7]
  console.log(sumPositiveNumbers(numbers))


//   Question -3: Write a JavaScript program to find the most frequent element in an array and return it. 

function findMostFrequentElement(arr) {
    let frequencyMap = {};
    
    for (let num of arr) {
      frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }
    
    let mostFrequent;
    let maxFrequency = 0;
    for (let num in frequencyMap) {
      if (frequencyMap[num] > maxFrequency) {
        mostFrequent = num;
        maxFrequency = frequencyMap[num];
      }
    }
    
    return parseInt(mostFrequent);
  }
  
  let arr = [1, 2, 3, 2, 2, 4, 5, 4, 2];
  console.log(findMostFrequentElement(arr));
  

//   Question-4:Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

function findTwoNumbersWithSum(sortedArr, target) {
    let left = 0;
    let right = sortedArr.length - 1;
  
    while (left < right) {
      let sum = sortedArr[left] + sortedArr[right];
  
      if (sum === target) {
        return [left, right];
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
      return [];
  }
  
  let sortedArray = [3, 5, 3, 6, 9, 11];
  let targetValue = 16;
  console.log(findTwoNumbersWithSum(sortedArray, targetValue)); 



  // Question-5: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

  function generatePassword(length) {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()-=_+[]{}|;:,.<>?';
  
    const allCharacters = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
  
    length = Math.max(length, 8);
  
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters[randomIndex];
    }
  
    return password;
  }
  const passwordLength = 8;
  const generatedPassword = generatePassword(passwordLength);
  console.log('Generated password:', generatedPassword);
  



// Question-6: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculator(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 === 0) {
        return "Error: Cannot divide by zero.";
      }
      return num1 / num2;
    default:
      return "Error: Invalid operator.";
  }
}
const number1 = 10;
const number2 = 5;
const operation = '-';
const result = calculator(number1, number2, operation);
console.log(`Result: ${result}`);





// QUestion-7: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

function findSecondSmallest(arr) {
  if (arr.length < 2) {
    return "Error: The array must have at least two elements.";
  }
  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let num of arr) {
    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (num < secondSmallest && num !== smallest) {
      secondSmallest = num;
    }
  }
  if (secondSmallest === Infinity) {
    return "Error: There is no second smallest element in the array.";
  }

  return secondSmallest;
}
const number = [12, 8, 15, 4, 10, 6];
const secondSmallestNumber = findSecondSmallest(number);
console.log("Second Smallest Number:", secondSmallestNumber);

  