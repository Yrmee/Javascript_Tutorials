/*

-- DE FLAT METHODE
Als je een array hebt met daarin verschillende niveaus aan arrays en 
je wilt deze plat slaan naar 1 array kunt je de Flat methode gebruiken. 
Je kunt de diepte van de arrays die je plat wilt slaan als parameter aan 
de Flat methode meegeven. Je kunt ook `Infinity` als parameter meegeven 
in plaats van de diepte, dan wordt er zo diep mogelijk plat geslagen.

In voorbeeld 1 hebben we een array met daarin 2 arrays. 
Wanneer we op deze array de flat methode aanroepen, 
krijgen we een nette array terug. 
In voorbeeld 2 hebben we een hele rommelige array. 
Ook hier roepen we de Flat methode op aan, deze keer met de 
parameter `Infinity`. Ook hier krijgen we een nette array uit terug.

*/

// Voorbeeld 1:
const arr1 = [[1, 2], [3, 4]];
arr1.flat(); 

// output: [1, 2, 3, 4]
console.log(arr1.flat());



// Voorbeeld 2:
const arr2 = [[[1], 2], [[3, [4]]]];
arr2.flat(Infinity); 

// output: [1, 2, 3, 4]
console.log(arr2.flat(Infinity));