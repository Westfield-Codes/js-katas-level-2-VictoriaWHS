/* FUNCTION main() 
 * Facebook wants to check if you're 13, so they ask your birth year 
 * set age = "How old are you?"
 * then set born = asking "What year were you born?"
 * If myAge(age) is not equal to born, say, "Underaged", otherwise "Welcome!"
 * @param: none (main never gets params)
 * @return: none (main never gets returns
 */
var theage = prompt("how old are you?");
var born = prompt("waht year were you born?");
if (theage != born) alert("underaged");
else alert("Welcome!");