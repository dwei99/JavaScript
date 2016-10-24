/*
Rewrite the functions to display how the interpreter would read this
*/
// Problem 1
/*
console.log(first_variable);
var first_variable = "Yipee I was first!";
function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable);
}
console.log(first_variable);
*/

//problem 1 should be rewritten as
var first_variable; // var first_ariable declaration floats to the top
first_variable = "Yippe I was first!"; //first_variable gets assigned value of "Yippe I was first"
function firstFun() {                 //function acts like a cage for variables
  var first_variable;                //local declaration of the first_variable
  var first_vartiable = "Not anymore!!!"; //local declaration gets assigned value of "Not anymore"
  console.log(first_variable)       //This is never called
}
console.log(first_variable);        //prints undefined as first variable wasn't assigned value initially
console.log(first_variable);       //prints "Yippe I was first"


/*
Rewrite the functions to display how the interpreter would read this
*/
// Problem 2
/*
var food = "Chicken";
function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";       //NOTE: I'M TRYING TO TRICK YOU HERE!!!!
}
eat();
console.log(food);
*/

//Problem should be rewritten as
var food;    //declaration of var food
food = "Chicken"; //food assigned value of "Chicken"
function eat(){   // declaration of function eat
  var food;     //declaration of var food at local level
  food = "gone"  //food assigned value of "gone"
  food = "half-chicken" //food assigned value of "half-chicken"
  console.log(food); //prints value of food which is "half-chicken"
}
eat();     //function call to eat() should print value of food which is "half-chicken"
console.log(food); //prints global value of food which is "Chicken"

/*
Rewrite the functions to display how the interpreter would read this
// Problem 3
var new_word = "NEW!";
function lastFunc() {
  new_word = "old";
}
console.log(new_word);
*/
//Should be rewritten as
var new_word;   //variable declartion of var new_word
new_word = "NEW!"; // var new_word assigned value of "NEW"
function lastFunc(){ //function declartion of lastFunc
new_word = old;     //new_word assigned local value of "old" for the scope of the function
}
console.log(new_word);//prints out "NEW!" Which is the global value for this variable
