/* randNum(max);
a helper function to return whole number randoms
@param max {int} the max in the random range
@return {int} a random number of 1 or more
*/
function randNum(max){
  return Math.floor(Math.random()*max)+1;
}


/* uniqueIndex(max, number)
a helper function to get unique numbers out of a range so as to avoid reuse.
@param max {int} the max number in the number in the range +1
@param number {int} the number of responses to return
@return {array} an array of the selected number
*/
function uniqueIndex(max, number){
  var array = [];
  var numbers = [];
  array.length = max;
  for (var i = 0; i < number; i++) {
    var num = randNum(max);
    if (array[num] !== "") {
      numbers[i] = num;
    }else {
      var num = randNum(max);
      i--;
    }
    array[num] = "";
  }
  return numbers;
}

/* andEval(condition1, condition2)
takes two conditions and makes a new condition out of them based on their combined
and state and combines the text of the two conditions. Cleans up text some
@param condition1 {object} an object with str and bool keys
@param condition2 {object} an object with str and bool keys
@return {object} an object with str and bool keys
*/
function andEval(condition1, condition2){
  var retObj = {};
  if (condition1.bool == true && condition2.bool == true) {
    retObj = {str: condition1.str + " and " + condition2.str, bool: true};
  } else {
    retObj = {str: condition1.str + " and " + condition2.str, bool: false};
  }
  return retObj
}

/* orEval(condition1, condition2)
takes two conditions and makes a new condition out of them based on their combined
or state and combines the text of the two conditions. Cleans up text some
@param condition1 {object} an object with str and bool keys
@param condition2 {object} an object with str and bool keys
@return {object} an object with str and bool keys
*/

function orEval(condition1, condition2){
  var retObj = {};
  if (condition1.bool == true || condition2.bool == true ) {
    retObj = {str: condition1.str + " or " + condition2.str, bool:true};
    }else {
    retObj = {str: condition1.str + " or " +condition2.str, bool:false};
  }
  return retObj;
}
/* notEval(condition)
takes a condtion, negates it's value, adds the text "it is not the case that" to the
front of it, sets the negated key to true
@param condtion {object} an object with str and bool keys
@return {object} an object with str, bool, and negated keys
*/
function notEval(condition) {
  return {str: "It is not the case that " + condition.str, bool: !condition.bool, negated: true}
}
//to the following:
/* arrayReader(array, split)
take an array of strings in the format of text 1 split text 2
text 2 is assumed to be the words true or false. Uses these to set bools
makes a new array where each element is an object.
@param array: {array} an array with string containing the split
@param split: {string} the item to split at
@return {array} an array of objects keyed with str, bool and the new key negated: false
*/



//3. implement the following
/* makeQuestion(conditions, maxDepth=3, negate=.2)
takes an array of condition objects formated {str: text, bool: bool, negated: bool}
and uses it make a question of depths between 1 - maxDepth combined statement length
it should randomly use and or ors at a 50% chance each
@param condition {array} an array of objects formatted as listed above
@param maxDepth {int} number of conditionals to be put together at max
@param negate {float} chance of a negation happening
@return a new object with the same general format
*/
function makeQuestions(conditions, maxDepth=3, negate=.2){
  var retObj = {};
  var int = uniqueIndex(conditions.length, randNum(maxDepth));
  // gives me a random number of numbers based on the number of conditions
  for (var i = 0; i < int.length; i++) {
    for (var j = 0; j < maxDepth - 1; j++) {
      if (Math.random() < .5){
       var orEvl = orEval(conditions[int[i]], conditions[int[j]]);
       retObj = orEvl;
    }else {
      var andEvl = andEval(conditions[int[i]], conditions[int[j]]);
      retObj = andEvl;
    }
  }
}
  if (conditions.negated == true) {
   var notEvl = notEval(cond);
   retObj = notEvl;
  }
  return retObj;
}
//^^^ with this one -
//You'll need to pick random things without replacement (did we do a function for that?)
//You'll need to have a random chance of a negation (by default 20% (aka .2)
//You'll need to loop through maxDepth amount of things and glue them together,
//but you'll have to do something different when there is only 1 left . What sort of loop and logic would work best for this?

/* makeSentence(condition)
Makes a (likely run-on) sentence out of a conditional stored in an object with the keys
str, bool, and negated. It does the following: if negated then it capitalized the i in
"it is not the case" and adds a period to the end of the str. If it is not negated then it
adds the phrase "It is the case " to the start of the str and adds a period to the end of the string.
@param condition {array} an array of objects formatted as listed above
@return {object} a new object with the same general format
*/
function makeSentence(condition) {
  var retObj = {}
  if (retObj.negated == true){
    retObj = {
      str: "It is not the case that " + condition.str + ".",
      bool: !condition.bool,
      negated: true
      }
    }
  if (retObj.negated == false) {
    retObj = {
      str: "It is the case that " + condition.str,
      bool: !condition.bool,
      negated: true
    }
  }
    return retObj
}
