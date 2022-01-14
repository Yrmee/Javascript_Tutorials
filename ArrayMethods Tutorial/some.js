const persons = [
    { name: 'Piet', age: 23 },
    { name: 'Jan', age: 34 },
    { name: 'Klaas', age: 33 },
    { name: 'Joost', age: 25 },
];

/*

-- DE SOME METHODE
Bij de Some methode wordt er door de hele dataset gekeken of er aan de 
gegeven conditie voldaan wordt. 
Zodra de conditie 1 keer `true` teruggeeft, geeft de gehele Some methode 
ook `true` terug. Alleen wanneer er in de gehele dataset geen waarde is 
die aan de conditie voldoet geeft deze methode `false` terug.

In dit geval vragen wij ons af in de conditie of er een persoon is in 
onze dataset die ouder is dan 30 jaar. In dit geval zijn er twee personen 
waarbij dit het geval is, dus krijgen wij `true` terug.

*/

persons.some((person) => {
    return person.age > 30;
}); 

// output: true

console.log(persons.some( person => person.age > 30));

const AgeOver30 = persons.some((person) => person.age > 30);
console.log(AgeOver30);