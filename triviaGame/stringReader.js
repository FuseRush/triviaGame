/* stringParser(string)
uses regex to find the end of each line cleans them and makes them an array
students check https://beckism.com/2010/09/splitting-lines-javascript/ for regex
you also want it clean off any lagging carage returns from the end of the line
@param string: {string} a big old string to be read
@return {array} the contents of the string an array, 1 line per array index;
*/

/* arrayReader(array, split)
take an array of strings in the format of text 1 split text 2
cleans up any extra whitespace
turns this into an object of form {str: text1, bool: bool based on text 2}
text 2 is assumed to be the words true or false. Uses these to set bools
makes a new array where each element is an object.
@param array: {array} an array with string containing the split
@param split: {string} the item to split at
@return {array} an array of objects keyed with str and bool and negated : false
*/
arrayReader(array, split);
var ten= ["text 1"+ split + "text 2"]
{str: text1, bool: bool based on text2}


/* stringReader(string, split=";")
a wrapper function for stringParser and arrayReader
@param string {string} a heaping long string covering many lines
@pram split=";" {string} where to split the string
@return {array} an array of objects keyed str and bool
*/
