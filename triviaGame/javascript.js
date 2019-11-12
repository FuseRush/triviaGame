/*make variables for the following-
playGame (if you are playing the game or not)
score
questions (this should be the results of your stringReader)

Make a while loop which continues while playGame is true
inside the loop -
have it make a question using makeQuestion
have it use prompt (look up how to use this) that shows a score and text of the question

if the player responds 1 or 2 have it evaluate to see if that matches the bool state
if it matches the question's bool state, add 1, if it does not, subtract one

if the player responds with a q have it set the playGame to false
^^^^^^^^ DO THIS FIRST WHEN ADDING THE WHILE LOOP

if the player enters r, have it set the score to 0.
/*make variables for the following-
playGame (if you are playing the game or not)
score
questions (this should be the results of your stringReader)

Make a while loop which continues while playGame is true
inside the loop -
have it make a question using makeQuestion
have it use prompt (look up how to use this) that shows a score and text of the question

if the player responds 1 or 2 have it evaluate to see if that matches the bool state
if it matches the question's bool state, add 1, if it does not, subtract one

if the player responds with a q have it set the playGame to false
^^^^^^^^ DO THIS FIRST WHEN ADDING THE WHILE LOOP

if the player enters r, have it set the score to 0.
*/
 // declare the variable that tracks the state
function clickfalse(){ // declare a function that updates the state
  return true
}

function clicktrue(){
  return true
}
var elementTrue = document.getElementById("trueBtn"); // grab a reference to your element
  elementTrue.addEventListener('click', clicktrue);
var elementFalse = document.getElementById("falseBtn");
  elementFalse.addEventListener('click', clickfalse);

// pro is chaging everytime which is what we want but its not updating on The
//screen and also score for some reason isnt changing in general
// the buttons work enough to where they will make the fucntion go through the
// if statements
function makeGame(){
  var playGame = true;
  var score = 0;
  var questions = stringReader(string);
  var bob = makeQuestions(questions);
  var pro = ("your score is: " + score +  ", the question is: " + bob.str + ".")
    if (bob.bool == true && clicktrue() == true) {
        score += 1;
      }
    if (bob.bool == true && clicktrue() == false) {
        score -= 1;
      }
    if (bob.bool == false && clickfalse() == true) {
        score += 1;
      }
    if (bob.bool == false && clickfalse() == false) {
        score -= 1;
      }
    document.getElementById("replace").innerHTML = pro;
  }
