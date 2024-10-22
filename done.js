main();
/* FUNCTION main() 
 * Facebook wants to check if you're 13, so they ask your birth year 
 * set age = "How old are you?"
 * then set born = asking "What year were you born?"
 * If myAge(age) is not equal to born, say, "Underaged", otherwise "Welcome!"
 * @param: none (main never gets params)
 * @return: none (main never gets returns
 */
function main(){
    let age= prompt(" how old are you?");
    let born= prompt("What year were you born?");
    if (myAge(age) !=born) alert("underaged");
        else alert("Welcome");
}
/* FUNCTION myAge(age)
 * define a function called myAge with number parameter age
 * Get thisYear using the date function https://www.w3schools.com/js/js_date_methods.asp
 * set birthYear as thisYear minus age and return that
 * @param: age (integer)
 * @return: birthyear (year)
 */
function myAge(age){
    let today = new Date();
    let thisYear = today.getFullYear();
    let birthYear = thisYear - age;
    return birthYear;
}