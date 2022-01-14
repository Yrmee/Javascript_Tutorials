const persons = [
    { name: 'Piet', age: 23 },
    { name: 'Jan', age: 34 },
    { name: 'Klaas', age: 33 },
    { name: 'Joost', age: 25 },
];

/*

-- DE EVERY METHODE
De Every methode lijkt heel erg op de Some methode. 
Bij deze methode moeten alle waarde aan de conditie voldoen om `true` terug 
te geven. Ook al is er in de gehele dataset maar 1 waarde die niet aan 
de conditie voldoet, geeft de Every methode al false terug.

In het onderstaande voorbeeld wordt de vraag gesteld of elk persoon uit 
onze dataset ouder is dan 17 jaar. In onze array met personen weten we 
dat dit klopt, dus geeft de methode `true` terug.

*/

persons.every((person) => {
    return person.age > 17;
}); 

// output: true
console.log(persons.every(person => person.age > 17));

// Hetzelfde console loggen, alleen dan in een variabele. 
const ageOver17 = persons.every(
    person => person.age > 17
);
console.log(ageOver17);
