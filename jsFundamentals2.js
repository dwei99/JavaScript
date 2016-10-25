//Create a simple problems from JS Fundamentals Part 1 into functions that take variable inputs
// Standalone Function

function sumbetween(x, y){
  var sum = 0;
  //var index = x+1;
  for (var i = x+1; i < y; i++)
  {
    if (i > x && i < y){
      sum += i;
    }
  }
  console.log(sum);
  return sum;
}
console.log(sumbetween(1,5));

//Anonymous Functions
var sumbetween = function(x,y){
  var sum = 0;
  //var index = x+1;
  for (var i = x+1; i < y; i++)
  {
    if (i > x && i < y){
      sum += i;
    }
  }
  console.log(sum);
  return sum;
}
console.log(sumbetween(1,5))

//* Function as a Method
var sumbetween = {
  sum: function(x,y){
    var sum = 0;
    //var index = x+1;
    for (var i = x+1; i < y; i++)
    {
      if (i > x && i < y){
        sum += i;
      }
    }
    console.log(sum);
    return sum;
  }
}
sumbetween.sum(1,5);


//Write a loop that will go through an array, find the minimum value and then return it
//Standalone Function
function findMin(arr){
  var min = 0;
  for (var i =0; i<arr.length; i++){
    if(min > arr[i]){
      min = arr[i];
    }
  }
  return min;
}
var arr = [1,67,-10,-54,1000,123];
console.log(findMin(arr));

//Anonymous Function
var findMin = function(arr){
  var min = 0;
  for (var i =0; i<arr.length; i++){
    if(min > arr[i]){
      min = arr[i];
    }
  }
  return min;
};
var arr = [1,67,-10,-54,1000,123];
console.log(findMin(arr));
//As a method to an Object
var findMin = {
  findMin: function(arr){
    var min = 0;
    for (var i =0; i<arr.length; i++)
    {
      if(min > arr[i])
      {
        min = arr[i];
      }
    }
    console.log(min);
    return min;
  }
}
var arr = [1,67,-10,-54,1000,123];
findMin.findMin(arr);
/*
Write a loop that will go through an array, find the average of all the values, and then return it
*/
//Standaone function
function findAvg(arr){
  var avg = 0;
  for(var i = 0; i<arr.length; i++)
  {
    avg+=arr[i];
  }
  avg = avg/arr.length;
  return avg;
}
var arr = [1,2,10,5,2];
console.log(findAvg(arr));
//Anonymous function
var findAvg = function(arr){
  var avg = 0;
  for(var i = 0; i<arr.length; i++)
  {
    avg+=arr[i];
  }
  avg = avg/arr.length;
console.log(avg);
};
var arr = [1,2,10,5,2];
findAvg(arr);
//Function as a method of an Object
var findAvg = {
  avg: function(arr){
    var avg = 0;
    for(var i = 0; i<arr.length; i++){
      avg+=arr[i];
    }
    avg= avg/arr.length;
    console.log(avg);
    return avg;
  }
}
findAvg.avg(arr);

var car = {
  'doors': 2
}


var person = {
  name: "Trey",
  distance_traveled: 0,
  say_name: console.log((this.name)),
  say_something: function(str){
    console.log("Who's there "+ str)},
  walk: function()
  {
    person.distance_traveled +=3;
    console.log("Trey is walking "+ person.distance_traveled);
  },
  run: function()
  {
    person.distance_traveled += 10;
    console.log("Trey is running "+ person.distance_traveled);
  },
  crawl: function()
  {
    person.distance_traveled += 1;
    console.log("Trey is crawling "+ person.distance_traveled);
  }
}
console.log(person.name);
console.log(person.crawl());
console.log(person.run());
console.log(person.walk());
