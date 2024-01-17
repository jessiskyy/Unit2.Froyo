const userInputString = prompt(
    "Please enter some froyo flavors separated by commas.",
    
  );

  const stringArray = userInputString.split(",");
  

  function countFlavors (froyoFlavors) {
    const flavorCount = {};
    for(let i = 0; i < froyoFlavors.length; ++i) {
        const flavor = froyoFlavors[i];
        flavorCount[flavor] = (flavorCount[flavor] || 0) + 1;
    }

    
    return flavorCount; 
}
    console.log(countFlavors(stringArray))

  //use an object to count how many orders there are of each flavor//

  //function countFlavors (froyoFlavors) {
   // const flavorCount = (froyoFlavors.length; i++)
 // }
  //i want to use a function to count how many orders there are and i want to use loop and return the number of the flavors
  // const flavorCount = (froyoFlavors.length; i++)
  //  countFlavors(froyoFlavors[i])

