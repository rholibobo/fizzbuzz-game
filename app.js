// Multi dimensional arrays

// Question 1
var arr = [[1, 2, 3],[4, 5, 6],7,8,9,[[10, 11, 12, [13, 4, 112]], 136, 14],];

var output = `${arr[5][0][0]}, ${arr[3]}, ${arr[5][0][3][0]}, ${arr[5][1]} and ${arr[1][0]}`;


 console.log(output);

// Question 2
var sentence = ["Javascript", "Web", "Capacity Bay"];
output = `I am a ${sentence[1]} developer at ${sentence[2]} and I love ${sentence[0]} `;

console.log(output);

// Question 3
var word = "Generalization"
output = word.slice(10,11);

console.log("The 4th to the last character in the word above is letter: " + output);

// Question 4
var arr = ["orange", "apple", "guava", "lemon"]
arr.unshift("pea", "banana")
arr.push("avocado", "mango");

console.log(arr);


//  Fizz Buzz Game

 var arr = []; 
function writeNum() {
  
   for( var sum = 0; sum < 101; sum++) {
        if (sum % 5 === 0 && sum % 3 === 0) {
        console.log("FizzBuzz");
        }
        else if (sum % 3 === 0) { 
        console.log("Fizz");
        }
        else if (sum % 5 === 0 ) {
        console.log("Buzz");
        }
        else {
           console.log(sum)
        }
   }
}
writeNum()


    









