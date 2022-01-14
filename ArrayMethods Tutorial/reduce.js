const persons = [
    { name: 'Piet', age: 23 },
    { name: 'Jan', age: 34 },
    { name: 'Klaas', age: 33 },
    { name: 'Joost', age: 25 },
];

/*

DE REDUCE METHODE
De Reduce methode wordt gebruikt voor het samenvoegen van data uit 
een array. Zo kun je op een heel efficiënte manier het totaal van 
een dataset uitrekenen. Deze methode is iets uitgebreider dan de vorige 
voorbeelden. In plaats van dat alleen de `person` als parameter geven werd, 
geven we nu ook een `currentTotal` mee. Deze parameter houdt het huidige 
totaal bij. Voor elke waarde in een dataset telt deze methode de waarde op 
bij het huidige totaal. De 0 aan het einde van de Reduce methode is de 
initiële waarde. Vanaf deze waarde begint de methode met tellen.

In het onderstaande voorbeeld tel ik alle leeftijden van de personen 
bij elkaar op. We beginnen bij 0, omdat die als initiële waarde meegegeven 
is. 

De eerste som in de Reduce methode is in ons geval
 `23 + 0`, onze `currentTotal` wordt dan geüpdatet naar 23. 
 De tweede som wordt dan `34 + 23` en de `currentTotal` wordt 
 weer geüpdatet. Dit proces herhaalt zich tot er geen personen meer te 
 vinden zijn in onze array. De `currentTotal` wordt dan teruggegeven, 
 dat zou in ons geval 115 zijn.

*/

persons.reduce((currentTotal, person) => {
    return person.age + currentTotal;
}, 0); 
// output: 115

console.log(persons.reduce((currentTotal, person) => {
    return person.age + currentTotal
}, 0));