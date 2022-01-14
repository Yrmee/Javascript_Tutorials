const persons = [
    { name: 'Piet', age: 23 },
    { name: 'Jan', age: 34 },
    { name: 'Klaas', age: 33 },
    { name: 'Joost', age: 25 },
];

/*

DE FOREACH METHODE .forEach()
De Foreach methode lijkt op de Map methode. 
Deze methode wordt vaker gebruikt wanneer je alleen iets met de data wilt 
doen. Hierbij kun je denken aan het printen van data op het opslaan naar 
een database.

In de voorbeeldcode zien we dat de Foreach methode wordt aangeroepen 
op onze dataset. Per persoon die gevonden wordt loggen we de leeftijd 
naar de console. Dit resulteert in een lijstje van 4 leeftijden.

*/

persons.forEach((person) => {
    console.log(person.age);
});

/* 
output in de console:
23
34
33
25
*/
