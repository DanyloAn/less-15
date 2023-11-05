// task 1
// function isPalindrome(str) {
//   var cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  
//   return cleanedStr === cleanedStr.split('').reverse().join('');
// }

// var inputString = prompt("Введіть рядок: ");
// var result = isPalindrome(inputString);

// if (result) {
//   console.log("Рядок є паліндром.");
// } else {
//   console.log("Рядок не є паліндром.");
// }

// task 2.
// function countVowels(str) {
//   var vowelCount = 0;
//   var vowels = "aeiou";

//   for (var i = 0; i < str.length; i++) {
//       if (vowels.includes(str[i].toLowerCase())) {
//           vowelCount++;
//       }
//   }

//   return vowelCount;
// }

// var inputString = prompt("Введіть рядок: ");
// var numberOfVowels = countVowels(inputString);
// console.log("Кількість голосних букв: " + numberOfVowels);


// task 3.
// function removeRepeatingCharacters(inputString) {
//   var result = "";
//   var charSet = new Set();

//   for (var i = 0; i < inputString.length; i++) {
//       var char = inputString[i];
//       if (!charSet.has(char)) {
//           result += char;
//           charSet.add(char);
//       }
//   }

//   return result;
// }

// var inputString = prompt("Введіть рядок: ");
// var modifiedString = removeRepeatingCharacters(inputString);
// console.log("Відредаговано:", modifiedString);


// task 4
// function formatAndDisplayFullName() {
//   var lastName = prompt("Введіть призвіще: ");
//   var firstName = prompt("Введіть ім'я: ");

//   lastName = lastName.trim().charAt(0).toUpperCase() + lastName.trim().slice(1).toLowerCase();
//   firstName = firstName.trim().charAt(0).toUpperCase() + firstName.trim().slice(1).toLowerCase();

//   var fullName = lastName + " " + firstName;
//   alert("Відредаговано: " + fullName);
// }

// formatAndDisplayFullName();


// task 5
// function findShortestWord(sentence) {
//   var words = sentence.split(" ");
//   var shortestWord = words[0];
  
//   for (var i = 1; i < words.length; i++) {
//       if (words[i].length < shortestWord.length) {
//           shortestWord = words[i];
//       }
//   }
  
//   return shortestWord;
// }

// var inputSentence = prompt("Введіть речення: ");
// var shortestWord = findShortestWord(inputSentence);
// console.log("Найкоротше слово в реченні: ", shortestWord);

// task 6
// function findLargestNumber(numbers) {
//   if (numbers.length === 0) {
//       return "Пусто.";
//   }

//   var largestNumber = numbers[0];
//   for (var i = 1; i < numbers.length; i++) {
//       if (numbers[i] > largestNumber) {
//           largestNumber = numbers[i];
//       }
//   }

//   return largestNumber;
// }

// var numbers = prompt("Введіть числа: ");
// var largestNumber = findLargestNumber(numbers);
// console.log("Найбільше число: " + largestNumber);

// task 7
// function calculateAverage(numbers) {
//   if (numbers.length === 0) {
//       return 0; 
//   }

//   var sum = 0;
//   for (var i = 0; i < numbers.length; i++) {
//       sum += numbers[i];
//   }

//   var average = sum / numbers.length;
//   return average;
// }

// var numbers = [1,2,3,4,5,6,7,8,9];
// var average = calculateAverage(numbers);
// console.log("Середнє: " + average);


// task 8
function filterNumbersGreaterThanTen(numbers) {
  var filteredNumbers = numbers.filter(function(number) {
      return number > 10;
  });
  return filteredNumbers;
}

// Example usage:
var inputNumbers = [10, 2, 40, 22, 6, 15, 0, -6];
var result = filterNumbersGreaterThanTen(inputNumbers);
console.log("Numbers greater than 10:", result);