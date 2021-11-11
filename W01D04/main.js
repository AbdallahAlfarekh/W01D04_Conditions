console.log(arrowTitle)


// 1
if (10 <= 10){}
// 2
if (5 > 3) {}
// 3
if (5 > 10){}
else(true){}

// 4
if ((2 < 3) && (7 > 10)){}
// 5
if ("hello" ) == "hello"){}

//2


Predict the value of the following expressions and explain why.

//1
true && true && false; //flase , all should be true

true || (true && false); // true / just one enough to be true

5 === 2 || 1 < 10;   // true , one of them true
(!false && true) || (!true && true); //true , the 2nd one true so all true

//3


//Write a function legalAge that accepts one argument age
// and returns true if the age is over eighteen and false
// if it is below that.
const legalAge = function (age) { 
     // TODO: Your code here
     if (age > 18){ return true};
     else (return false) 

};
//legalAge(20); 
// => truelegalAge(18);
 // => truelegalAge(17);


  // => false
  
  
  //Write a function isItMyName that accepts one argument name and returns true if the name is the same as your name and return false if it is not.
  
  const isItMyName = function (name) {  // TODO: Your code here
if (isItMyName = "Aballah"
return true)
}
else ( return false)

;// the following output depends on the assumption that your name is `John`isItMyName("Mark"); // => falseisItMyName("Sarah"); // => falseisItMyName("John"); // => true


//5


//Write a function positiveOrNegative that accepts one argument number and returns a string saying whether the number is positive, negative, or if it is a neutral number like zero.

const positiveOrNegative = function (number) {  // TODO: Your code here
if (number > 0 ) { return 'positive'};
if (nember < 0){ return 'negative'};
else (number = 0){ return "ZERO"}}

//positiveOrNegative(10); // => 10 is positivepositiveOrNegative(-10); // => -10 is negativepositiveOrNegative(0); // => 0 is neither positive nor negative
 
 
 //PRACTICE///////////////////////////

 //1
 
    // you could use the `toLowerCase` string methods to convert a string into lower case
"HeLlO wOrlD".toLowerCase(); // => "hello world"

// you could use the `toUpperCase`string methods to convert a string into upper case
"HeLlO wOrlD".toUpperCase(); // => "HELLO WORLD"

const toLowerOrUpperCase = function (string, strCase) {
  // TODO: Your code here
  if (strCase = "lower"){return tolowerCase(stirng)};
  if (strCase = "upper"){return toUpperCase(string)}
};

toLowerOrUpperCase("HELLO WORLD", "lower"); // => "hello world"
toLowerOrUpperCase("my name is john", "upper"); // => "MY NAME IS JOHN"
toLowerOrUpperCase("my name is john", "mixed"); // => "String case must be lower or upper"


//2

const howLong = function (string) {
    if (string > 13 ){
         return "very long" }
         else if (  9 < string < 13){ 
             return "long"
             else if ( 5 < string < 8) { return "mediam"}
             else ( string < 5 ){ return "short"}
         }
  };

  //3
  