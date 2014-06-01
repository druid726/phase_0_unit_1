// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1.Magda Ang
//  2.Patti O'Neill


// 0. "YOU SIGNED... WHO?!"

var leonardoDicaprio =  {name: "Leonardo DiCaprio", age: 39, quote: "Rose, you will survive"}
var ryanGosling = {name: "Ryan Gosling", age: 33, quote: "Do you remember me?"}


// 1. "Here they Come!"
var adamSandler =  {name: "Adam Sandler", age: 47, quote: "That's your home! Are you too good for your home?!"};
var kristenBell = {name: "Kristen Bell", age: 33, quote: "Do you wanna build a snowman?"};
var jimCarrey = {name:"Jim Carrey", age:52, quote: "...So you're telling me there's a chance? YEAH!", showQuote: function display()};



// 2. "TIME IS MONEY!"

//YOUR CODE HERE!
function Client (name, age, quote) {
    this.name = name; 
    this.age = age;
    this.quote = quote;
    this.displayClient = displayClient;
    }
    
var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";



//3. "SHOW 'EM OFF!"

var leonardoDicaprio =  new Client("Leonardo DiCaprio", 39, "Don't let go Rose.");
var ryanGosling = new Client("Ryan Gosling", 33, "Do you remember me?");
var adamSandler =  new Client("Adam Sandler", 47, "That's your home! Are you too good for your home?!");
var kristenBell = new Client("Kristen Bell", 33, "Do you wanna build a snowman?");
var jimCarrey = new Client("Jim Carrey", 52, "...So you're telling me there's a chance? YEAH!");

var myClientsarray = [leonardoDicaprio, ryanGosling, adamSandler, kristenBell, jimCarrey];

console.log(myClientsarray);

for (var i = 0; i < myClientsarray.length; i++) {
    console.log(myClientsarray[i]);
    }


// 4. "But wait, there's more!"

jimCarrey = {showQuote: function() {
  console.log("...So you're telling me there's a chance? YEAH!")
  }
};
jimCarrey.showQuote();

// 5.  ** BONUS **

function displayClient() {
  var result = this.name + " is an actor whose age is " + this.age + " and their favorite quote is " + this.quote;
  console.log(result);
}


//  6.  Your Reflection:

// This challenge was a real pain in the ass.  I worked with Magda which was great!!  We needed another session to complete
// the challenge and even worked on it separately.  She has great attention to detail which helped with my typos and 
// used great resources from the web. I am very happy this challenge was a pair challenge because if I had to do 
// this myself I would be in tears right now. I think we both were frustrated when something did not work out the
// way we expected but I think that was due to the differences between Objects and functions and literal vs constructor.
// This challenge did solidify those concepts for me.  I am pretty pleased with the results.



