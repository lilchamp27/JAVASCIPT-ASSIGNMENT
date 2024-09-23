//  CODE TO PRINT THE MAXIMUM NUMBER IN AN ARRAY OF NUMBERS 
let numbers = [1,2,3,4,5];

function highestNum () {
    let highest = 0;

    for (i = 0; i < numbers.length; i++) {
      if (numbers[i] > highest) {
        highest = numbers[i];
      }
    }
      
    return [highest];
}

highestNum();

// MINIMUM NUMBERS IN AN ARRAY
let numberss = [1,2,3,4,5];

function highestNum () {
    let highest = numberss[0];

    for (i = 1; i < numberss.length; i++) {
      if (numberss[i] < highest) {
        highest = numberss[i];
      }
    }
      
    return [highest];
}

highestNum();

// CAPITALIZE FIRST LETTER
function capitalizeFirstLetter(sentence) {
    const words = sentence.split(" ");
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedWords.join(" ");
  }

  capitalizeFirstLetter("i am a good boy");

//   count characters
function countCharacters(str) {
    return str.length;
  }

countCharacters("hi, say something nice.");

// reverse string

function reverseString(str) {
  return str.split("").reverse().join("");
};

reverseString("uloB");




