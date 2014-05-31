// I worked on this challenge with: Widny St. louis
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 


//Rescue Mission
// moveUp2x -- end of hall
// moveRight2x --  end of hall
// moveDown - toward munchkin
// attack - kill munchkin


this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();

//Grab the Mushroom

//moveRight -- grab mushroom
//moveLeft -- continue to Ogre

this.moveRight(); 
this.moveLeft();


//Drink Me
//kill munchkin one
//move to potion
//come back to main hall
//kill munchkn 2

this.attackNearbyEnemy();
this.moveRight();
this.moveDown(); //grab the potion
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();

//Taunt the Guards
//move down the hall 
//move up the hall
//call guard
//move down different hall around guard
//escape

this.moveRight();
this.say("Follow me.");
//Phoebe kills lured munchkin escapes with Tharin
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("Hey there"); //Tharin calls the guard
//Phoebe and Tharin run down the hall and escape
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();

//It's a Trap
//move down hall
//get Ogres attention and have him follow you
//have archers kill Ogre

this.moveDown();
this.moveDown();
this.say("hey");
this.moveUp();
this.moveUp();

//Break the Prison
//identify who is behind door
//break out if friend
//move to next if not
//break out all friends and escape

if(name === "Krogg")
    return false;  // <-- Start here; Krogg is not a friend!
if(name === "Lucas")
    return true;
if(name === "Brack")
    return false;
if(name === "Gort")
    return false;
if(name === "Robert")
    return true;
if(name === "Marcus")
    return true;
if(name ==="MARCUS")
    return false;
if(name === "Gordon")
    return true;


//Taunt
//hurl insults at the Ogre - one at a time
//get Ogre to move within shooting distance of Tower

this.say("You are soo ugly!");
this.say("You smell bad");
this.say("You're a lousy Ogre");



//Cowardly Taunt
// moveup
// say something
// runaway

this.moveXY(63,23);
this.say("You are a lousy Ogre");
this.moveXY(70,11);

//Commanding Followers
// greet friends
// command to follow
// lead the charge
// attack

this.say("Follow me!");
this.moveXionY(64, 45);
this.say("Attack!");

//Mobile Artillery
// position canon
// fire on ogres to the right
// fire on big ogres again
// fire on ogres to the left
// fire on big ogres again

this.moveXY(52,43);
this.attackXY(71,56);
this.attackXY(64,51);
this.attackXY(50,64);
this.attackXY(51,51);
 
 
// Reflection:
// Write your reflection here.
// I really enjoyed this challenge.  I found it to be a great deal of fun.  I have discovered that I don't pay attention
// to details.  The break out of prison exercise ("MARCUS") took way too long to figure out.  This helped a great with
//syntax.  I really enjoyed working on this with Widny.  