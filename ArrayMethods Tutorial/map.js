const persons = [
    { name: 'Piet', age: 23 },
    { name: 'Jan', age: 34 },
    { name: 'Klaas', age: 33 },
    { name: 'Joost', age: 25 },
];

// DE MAP METHODE
console.log("DE MAP METHODE");
console.log(persons);

/*
--- DE MAP METHODE .map() ---

Door middel van deze methode kun je door een array met objecten lopen en 
deze direct een bepaalde waarde terug laten geven. 

Zo zou je van een array met veel objecten een stuk kleinere array maken met
een enkele waarde. De Map methode wordt vaak gebruikt wanneer
je data in je array aan wilt passen. 
Doordat deze methode een array teruggeeft zou je direct een andere 
Javascript array methode aan de map kunnen koppelen.

In het onderstaande voorbeeld lopen we door middel van 
de Map methode door onze array met personen heen. 
Per persoon in deze array willen we de voornaam terug geven. 
Als deze methode alle personen langs is gelopen houden we een array 
over met alleen de voornamen.
*/

persons.map((person) => {

    console.log(person.name); 
    // output in consolog.log: ['Piet', 'Jan', 'Klaas', 'Joost']

    return person.name;
}); 


