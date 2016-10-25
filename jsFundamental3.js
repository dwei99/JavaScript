
/*
Create a function that takes in one parameter called "name" and returns an object
that looks similar to the person object from JS Fundamentals Part II.
The returned object should have a name property that is set to the value of the
name argument that was passed into the function. Each returned person object
should also have the following other properties (from JS Fundamentals Part II):
*/

function personConstructor (name)
{
  var person =
  {
    personname: name,
  distance_traveled: 0,
  say_name: console.log((this.name)),
  say_something: function(str)
    {
    console.log("Who's there "+ str)
    },
    walk: function()
    {
      person.distance_traveled +=3;
      console.log(personConstructor.personname+" is walking "+ person.distance_traveled);
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
}

var name = "alex";
console.log(personConstructor(name).run);
