// TEST METHOD
// To find the a word in a string us

/example/;

let teststr = "the dog is going to dinner";
let testRegex = /the/; // single word search
testRegex.test(teststr);
// returns true

let teststr = "The dog is going to dinner";
let testRegex = /the/;
testRegex.test(teststr);
// returns false --> the is not the same as The... it's a literal match

// Multi pattern search
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // multi search
let result = petRegex.test(petString);
//returns true

// ignore casing while matching
let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // ignore casing    --> i flag
let result = fccRegex.test(myString);
// returns true --> /example/i ignores the lettering case and just looks at the letter string itself

// MATCH METHOD

"Hello, World!".match(/Hello/);
// Returns ["Hello"]
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
// Returns ["expressions"]

// Find More Than the First Match
let repeatRegex = /Repeat/g; // use G To search or extract a pattern more than once
testStr.match(repeatRegex);
// Returns ["Repeat", "Repeat", "Repeat"]

// /example/gi  how to append multiple flags

// Match Anything with Wildcard Period
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./; // use . to match anything that proceeds
humStr.match(huRegex); // Returns ["hum"]
hugStr.match(huRegex); // Returns ["hug"]

// Match Single Character with Multiple Possibilities
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/; //[] matches only those characters defined inside
bigStr.match(bgRegex); // Returns ["big"]
bagStr.match(bgRegex); // Returns ["bag"]
bugStr.match(bgRegex); // Returns ["bug"]
bogStr.match(bgRegex); // Returns null

// Match Letters of the Alphabet

// you can define a range of characters to match using a hyphen character: -.
// For example, to match lowercase letters a through e you would use [a-e].
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex); // Returns ["cat"]
batStr.match(bgRegex); // Returns ["bat"]
matStr.match(bgRegex); // Returns null

// range character set alway works for number /[0-9]/
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // one bracket to do number and letter range
let result = quoteSample.match(myRegex);
// returns an array of all chacaters within the letter and number range

// to create a negated character set us a caret in front [^aeiou]
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi;
let result = quoteSample.match(myRegex);
// returns ["b","l","n","d," ","m,"c","."]

// Match Characters that Occur One or More Times
let difficultSpelling = "Mississippi";
let myRegex = /s+/gi; // multiple occurance of the letter s
let result = difficultSpelling.match(myRegex);
//return ["ss","ss"]

// Match Characters that Occur Zero or More Times
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; // match all upper and lower "a characters"
let result = chewieQuote.match(chewieRegex);
// returns ["Aaaaaaaaaaaaa"]

// Find Characters with greedy Matching
let str = "titantic";
let strRegex = /t[a-z]*i]/; // matches anything between t and i.. find the largest substring
let result = str.match(strRegex);
// return titanti

// Find Characters with Lazy Matching
let str = "titantic";
let strRegex = /t[a-z]*?i]/; // matches the shortest subsctring
let result = str.match(strRegex);
// return ["ti"]

// Match Beginning String Patterns

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // use ^ outside of the [] to find the beginning of a string
let result = calRegex.test(rickyAndCal);
//returns true
let rickyAndCal = "Ricky and Cal both like racing.";
let calRegex = /^Cal/; // use ^ outside of the [] to find the beginning of a string
let result = calRegex.test(rickyAndCal);
//returns false

// Match Ending String Patterns
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // use $ to find the end string pattern
let result = lastRegex.test(caboose);
// returns true

// Match All Letters and Numbers
Shorthand character classes
let longhand = /[A-Za-z0-9_]+/ ; // every number and letter
let shorthand = /\w+/ ; // every number and letter
/\w/g // matches every letter 
/\w+/ // matches between every space

// Match Everything But Letters and Numbers
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand); // Returns ["%"]
sentence.match(shortHand); // Returns ["!"]

// Match All Numbers
instead of [0-9] use \d 

// Match All Non-Numbers
 instead of [^0-9] use \D 


//  Restrict Possible Usernames
 let username = "JackOfAllTrades";
 let userCheck = /^[a-z]{2,}\d*$/i;
 let result = userCheck.test(username);

 