/*

DE INCLUDES METHODE
Deze methode kijkt binnen een dataset of de aangegeven waarde gevonden kan 
worden. Wanneer de waarde gevonden is wordt er `true` teruggegeven, 
als dat niet het geval is wordt de return waarde `false`. 
Om te weten of een bepaalde waarde in een array bestaat is Includes niet 
altijd de meest efficiënte manier. Ben je benieuwd naar deze efficiënte 
manier, lees dan de blog van mijn collega Wout Werkman: 
https://create.nl/blogs/ben-je-bekend-met-sets-zo-maak-je-van-jaren-seconden

Bij deze methode maken we gebruik van een andere dataset dan de 
voorgaande methodes. Deze dataset staat bovenaan het volgende code 
voorbeeld. We hebben nu een array met daarin de getallen 1 t/m 5. 
Door middel van de includes methode doen we nu de check of 4 bestaat in 
de dataset. Dit is het geval, hierdoor krijgen we `true` terug.

*/

const data = [1, 2, 3, 4, 5]; // nieuwe dataset

data.includes(4); // output: true

console.log(data.includes(4));
