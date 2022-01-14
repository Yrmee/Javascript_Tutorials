const persons = [
    { name: 'Piet', age: 23 },
    { name: 'Jan', age: 34 },
    { name: 'Klaas', age: 33 },
    { name: 'Joost', age: 25 },
];

/* 

-- DE FIND METHODE
Ook de Find methode klinkt redelijk voor zich. 
Deze methode gaat in een bepaalde array zoeken of er een waarde te 
vinden is die in de methode wordt meegegeven. 
Wanneer dit het geval is wordt het gehele object van de gevonden 
waarde teruggegeven. Als je niet de hele waarde terug wilt krijgen, 
maar alleen de index kun je gebruik maken van de `findIndex` methode. 
Wanneer je de Filter methode een correcte waarde heeft gevonden gaat 
deze niet verder zoeken. Als er dus meerdere items gevonden kunnen 
worden krijg je alleen de eerste waarde terug. Wanneer er in de dataset 
geen waarde gevonden wordt geeft de Filter methode `undefined` terug.

Door middel van de Find methode vragen we in onderstaand geval of 
er een persoon met de naam ‘Klaas’ in onze dataset te vinden is. 
We krijgen vervolgens het complete object terug met daarin de 
persoon met de correcte naam.

*/

persons.find( (person) => {
    return person.name === 'Klaas';
}); 

console.log(persons.find(person => person.name === 'Klaas'));
// output: { name: 'Klaas', age: 33 }

persons.findIndex( (person) => {
    return person.name === 'Jan';
});
console.log(persons.findIndex(person => person.name === 'Klaas'));
// output: 2
