ARRAY METHODES IN JAVASCRIPT DIE JOUW LEVEN MAKKELIJKER GAAN MAKEN

Gepubliceerd: 10 december 2019 - door: MIKE TRAA bron: create.nl


Binnen Javascript wordt er veel gewerkt met arrays. Wat er met deze arrays moet gebeuren is afhankelijk van de use case. Soms wil je alle data uit de array tonen in een tabel of wil je alleen weten of een waarde zich bevindt in deze dataset.

Er zijn in Javascript veel array methodes. De grootste vraag is welke methode kun je het beste gebruiken per use case? Het kiezen van de juiste methode kan een positieve invloed hebben op de prestatie van jouw project.

In dit artikel leg ik de meest gebruikte Javascript array methodes uit. Dit doen we aan de hand van voorbeeld code. Na het lezen van dit artikel heb je geen moeite meer met het kiezen van de juiste array methodes in Javascript.

We gaan de volgende array methodes behandelen:
- Map
- Foreach
- Filter
- Find
- Some
- Every
- Reduce
- Includes
- Flat

De dataset waar wij gebruik van gaan maken bevat een lijst met personen. Van deze personen weten wij de naam en de leeftijd. De lijst met personen noemen we vanaf nu de array en de data in de array gaan we de objecten noemen. In de onderstaande voorbeelden gaan we gebruik maken van deze dataset:

const persons = [
    { name: 'Piet', age: 23 },
    { name: 'Jan', age: 34 },
    { name: 'Klaas', age: 33 },
    { name: 'Joost', age: 25 },
];

-----------------------------------------------


-- DE MAP METHODE
We gaan beginnen met de Map methode. Door middel van deze methode kun je door een array met objecten lopen en deze direct een bepaalde waarde terug laten geven. Zo zou je van een array met veel objecten een stuk kleinere array maken met een enkele waarde. De Map methode wordt vaak gebruikt wanneer je data in je array aan wilt passen. Doordat deze methode een array teruggeeft zou je direct een andere Javascript array methode aan de map kunnen koppelen.

In het voorbeeld (map.js) lopen we door middel van de Map methode door onze array met personen heen. Per persoon in deze array willen we de voornaam terug geven. Als deze methode alle personen langs is gelopen houden we een array over met alleen de voornamen.



-- DE FOREACH METHODE
De Foreach methode lijkt op de Map methode. Deze methode wordt vaker gebruikt wanneer je alleen iets met de data wilt doen. Hierbij kun je denken aan het printen van data op het opslaan naar een database.

In de voorbeeldcode (forEach.js) zien we dat de Foreach methode wordt aangeroepen op onze dataset. Per persoon die gevonden wordt loggen we de leeftijd naar de console. Dit resulteert in een lijstje van 4 leeftijden.



-- DE FILTER METHODE
De filter methode spreekt redelijk voor zich. Door middel van deze methode kun je irrelevante data uit je array filteren. Zo hoef je niet altijd door de complete array te lopen, maar zou je met de Filter methode hier een gedeelte van kunnen schrappen. De filter methode loopt ook door de gehele array heen. Per waarde gaat de methode kijken of die aan de gegeven voorwaarde voldoet. Als dit het geval is wordt deze waarde aan een nieuwe array toegevoegd, als dit niet het geval is wordt deze waarde overgeslagen.

In het voorbeeld (filter.js)willen we alleen alle personen terug krijgen die ouder zijn dan 30 jaar. Hier krijgen we een nieuwe dataset terug met daarin maar twee personen.



-- DE FIND METHODE
Ook de Find methode klinkt redelijk voor zich. Deze methode gaat in een bepaalde array zoeken of er een waarde te vinden is die in de methode wordt meegegeven. Wanneer dit het geval is wordt het gehele object van de gevonden waarde teruggegeven. Als je niet de hele waarde terug wilt krijgen, maar alleen de index kun je gebruik maken van de `findIndex` methode. Wanneer je de Filter methode een correcte waarde heeft gevonden gaat deze niet verder zoeken. Als er dus meerdere items gevonden kunnen worden krijg je alleen de eerste waarde terug. Wanneer er in de dataset geen waarde gevonden wordt geeft de Filter methode `undefined` terug.

Door middel van de Find methode vragen we in het voorbeeld (find.js) of er een persoon met de naam ‘Klaas’ in onze dataset te vinden is. We krijgen vervolgens het complete object terug met daarin de persoon met de correcte naam.



-- DE SOME METHODE
Bij de Some methode wordt er door de hele dataset gekeken of er aan de gegeven conditie voldaan wordt. Zodra de conditie 1 keer `true` teruggeeft, geeft de gehele Some methode ook `true` terug. Alleen wanneer er in de gehele dataset geen waarde is die aan de conditie voldoet geeft deze methode `false` terug.

In het voorbeeld (some.js) vragen wij ons af in de conditie of er een persoon is in onze dataset die ouder is dan 30 jaar. In dit geval zijn er twee personen waarbij dit het geval is, dus krijgen wij `true` terug.



-- DE EVERY METHODE
De Every methode lijkt heel erg op de Some methode. Bij deze methode moeten alle waarde aan de conditie voldoen om `true` terug te geven. Ook al is er in de gehele dataset maar 1 waarde die niet aan de conditie voldoet, geeft de Every methode al false terug.

In het voorbeeld (every.js) wordt de vraag gesteld of elk persoon uit onze dataset ouder is dan 17 jaar. In onze array met personen weten we dat dit klopt, dus geeft de methode `true` terug.


-- DE REDUCE METHODE
De Reduce methode wordt gebruikt voor het samenvoegen van data uit een array. Zo kun je op een heel efficiënte manier het totaal van een dataset uitrekenen. Deze methode is iets uitgebreider dan de vorige voorbeelden. In plaats van dat alleen de `person` als parameter geven werd, geven we nu ook een `currentTotal` mee. Deze parameter houdt het huidige totaal bij. Voor elke waarde in een dataset telt deze methode de waarde op bij het huidige totaal. De 0 aan het einde van de Reduce methode is de initiële waarde. Vanaf deze waarde begint de methode met tellen.

In het voorbeeld (reduce.js) tel ik alle leeftijden van de personen bij elkaar op. We beginnen bij 0, omdat die als initiële waarde meegegeven is. De eerste som in de Reduce methode is in ons geval `23 + 0`, onze `currentTotal` wordt dan geüpdatet naar 23. De tweede som wordt dan `34 + 23` en de `currentTotal` wordt weer geüpdatet. Dit proces herhaalt zich tot er geen personen meer te vinden zijn in onze array. De `currentTotal` wordt dan teruggegeven, dat zou in ons geval 115 zijn.


-- DE INCLUDES METHODE
Deze methode kijkt binnen een dataset of de aangegeven waarde gevonden kan worden. Wanneer de waarde gevonden is wordt er `true` teruggegeven, als dat niet het geval is wordt de return waarde `false`. Om te weten of een bepaalde waarde in een array bestaat is Includes niet altijd de meest efficiënte manier. Ben je benieuwd naar deze efficiënte manier, lees dan de blog van mijn collega Wout Werkman: https://create.nl/blogs/ben-je-bekend-met-sets-zo-maak-je-van-jaren-seconden

Bij deze methode (voorbeeld inclusdes.js) maken we gebruik van een andere dataset dan de voorgaande methodes. Deze dataset staat bovenaan het volgende code voorbeeld. We hebben nu een array met daarin de getallen 1 t/m 5. Door middel van de includes methode doen we nu de check of 4 bestaat in de dataset. Dit is het geval, hierdoor krijgen we `true` terug.


-- DE FLAT METHODE
Als je een array hebt met daarin verschillende niveaus aan arrays en je wilt deze plat slaan naar 1 array kunt je de Flat methode gebruiken. Je kunt de diepte van de arrays die je plat wilt slaan als parameter aan de Flat methode meegeven. Je kunt ook `Infinity` als parameter meegeven in plaats van de diepte, dan wordt er zo diep mogelijk plat geslagen.

In voorbeeld 1 (flat.js) hebben we een array met daarin 2 arrays. Wanneer we op deze array de flat methode aanroepen, krijgen we een nette array terug. In voorbeeld 2 (flat.js) hebben we een hele rommelige array. Ook hier roepen we de Flat methode op aan, deze keer met de parameter `Infinity`. Ook hier krijgen we een nette array uit terug.