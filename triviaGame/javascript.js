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
function makeGame(){
  var playGame = true;
  var score = 0;
  var questions = stringReader(string);
    while (playGame) {
      var bob = makeQuestions(questions);
      var pro = ("your score is: " + score +  " the question is: " + bob.str + ".")
    if (bob.bool == true && document.getElementById(trueBtn).clicked == true) {
        score += 1;
      }else {
        continue;
      }
    if (bob.bool == true && document.getElementById(trueBtn).clicked == false) {
        score -= 1;
      }else {
        continue;
      }
    if (bob.bool == false && document.getElementById(falseBtn).clicked == true) {
        score += 1;
      }else {
        continue;
      }
    if (bob.bool == false && document.getElementById(falseBtn).clicked == false) {
        score -= 1;
      }else {
        continue;
      }
  if (pro == "q" || pro == "Q") {
        playGame = false;
    }
    return pro;
  }
}

document.getElementById("replace").innerHTML = makeGame();
