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
  for (var i = 0; i < array.length; i++) {
    if () {

    }
  }
}
/* andEval(condition1, condition2)
takes two conditions and makes a new condition out of them based on their combined
and state and combines the text of the two conditions. Cleans up text some
@param condition1 {object} an object with str and bool keys
@param condition2 {object} an object with str and bool keys
@return {object} an object with str and bool keys
*/
<<<<<<< HEAD
=======
function endEval(condition1, condition2){
  if (condition1 == true && condition2 == false) {
    
  }
}
>>>>>>> 5450a851a6a7741004c8e8cf3a304fb7dc4a6aa0

/* orEval(condition1, condition2)
takes two conditions and makes a new condition out of them based on their combined
or state and combines the text of the two conditions. Cleans up text some
@param condition1 {object} an object with str and bool keys
@param condition2 {object} an object with str and bool keys
@return {object} an object with str and bool keys
*/
