/* FUNCTION main()  
 * Ask for the name of a dog (dogName)
 * Ask how many cups of food they get each meal (cups)
 * call feedDog with parameters dogName, cups
 * @param: none (main never gets params)
 * @return: none (main never gets returns
 */
main();
function main(){
    dogName= prompt("What is your dog's name?");
    cups=prompt("how many cups of food do they get each meal?");
    feedDog(dogName, cups);
}
/* FUNCTION feedDog(dogName, cups) */
/* define a function called feedDog with string parameter dogName, number parameter cups
 * loop from cup = 1 to cups.  For each cup, display "Here's a cup of kibble, [dogName]!"
 * @param: dogName (string), cups (integer)
 * @return: none
 */ 

function feedDog(dogName, cups){
    for (let cup = 1 ; cup<= cups; cup++){
        alert(" heres a cup of kibble, "+ dogName+ " !");
    }
}


