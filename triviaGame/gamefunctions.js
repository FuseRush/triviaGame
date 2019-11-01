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
  return {str: "It is not the case that " + condition.str, bool: !condition.bool, negated: !condition.negated}
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
makeQuestion(stringReader(content))
takes an array of condition objects formated {str: text, bool: bool, negated: bool}
and uses it make a question of depths between 1 - maxDepth combined statement length
it should randomly use and or ors at a 50% chance each
@param condition {array} an array of objects formatted as listed above
@param maxDepth {int} number of conditionals to be put together at max
@param negate {float} chance of a negation happening
@return a new object with the same general format

1. make a return object
2. find out the actual depth
  if depth is 1... pick one thing at random off condition...check if we negate, return;
  otherwise - 1.  pick our things - uniqueIndex(conditions.length, depth);
              2. start doing the big return
                  1. go make a for loop (things.length -1)
                  2. in the for loop want to determine a and or or
                  [42, 11, 27, 32, 0]
                  we need 2 things, but we make a for lop we get 1 thing =/
                  if we use i for our iterator we caould overcome this one of two ways.
                    way #1 i and i+1 make our loop using length -2 rather than -1
                    way #2 i and i-1 we could set i to 1 initially or if i = 0 continue;
                      why are ways 1 & 2 kind of bad?

                        first step is to pick first two;
                          Ex 42, 11
                        the second set and there on.
                          Ex 11, 27
                        so if we were to fix that... we'd need to come up with some
                        way to skip a sentence.
                        if we do that, when all is said and done, we still have
                        to add all the sets together.
                          Ex {42,11} {23, 32}
                        we would have to come up with a way of dealing with having
                        an uneven number of things.

                    way #3 for i in length of things pop off the end, we will have
                      to treat the first one different as with way 2 above
                      way #3 when we have the first thing check if it is negated
                      make the retObj = to the first thing
                      following the first thing figure out and or or and negation
                      retObj = which ever eval(new item, retObj)
              3. return retObj

*/

function helpNeg(condition, negate=.2){
  var eval = notEval(condition);
  var num = Math.random();
    if (num <= negate) {
      return eval;
    }else {
      return condition;
    }
  }


function makeQuestions(conditions, maxDepth=3, negate=.2){
    var retObj = {};
    var num = randNum(maxDepth);
    var index = uniqueIndex(conditions.length, num);
  if (num == 1) {
    var cond = randNum(conditions.length);
    retObj = helpNeg(conditions[cond]);
  }else {
    var cond = randNum(conditions.length);
    retObj = helpNeg(conditions[cond]);
   for (var i = 0; i < num; i++) {
      var obj = conditions[index[i]];
     // var use = arr[index[i]].pop();
     var bob = Math.random();
      if (bob <= .5) {
        retObj = andEval(obj, retObj);
      }else{
        retObj = orEval(obj, retObj);
      }
    }
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
  if (condition.negated) {
    condition.str = "I" + condition.str.slice(1) + ".";
    }else{
  condition.str = "It is not the case " + condition.str + ".";
    }
    return condition
  }
