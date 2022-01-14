const persons = [
    { name: 'Piet', age: 23 },
    { name: 'Jan', age: 34 },
    { name: 'Klaas', age: 33 },
    { name: 'Joost', age: 25 },
];

/*

DE FILTER METHODE
De filter methode spreekt redelijk voor zich. 
Door middel van deze methode kun je irrelevante data uit je array filteren. 
Zo hoef je niet altijd door de complete array te lopen, 
maar zou je met de Filter methode hier een gedeelte van kunnen schrappen. 
De filter methode loopt ook door de gehele array heen. 
Per waarde gaat de methode kijken of die aan de gegeven voorwaarde voldoet. 
Als dit het geval is wordt deze waarde aan een nieuwe array toegevoegd, 
als dit niet het geval is wordt deze waarde overgeslagen.

In het onderstaande voorbeeld willen we alleen alle personen terug krijgen 
die ouder zijn dan 30 jaar. 
Hier krijgen we een nieuwe dataset terug met daarin maar twee personen.

 */

persons.filter((person) => {
    return person.age > 30;
}); 
console.log(persons.filter(person => person.age > 30));
// output: [ { name: 'Jan', age: 34 }, { name: 'Klaas', age: 33 }]