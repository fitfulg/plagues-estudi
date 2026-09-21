# Plagues i malalties · Joc d’estudi

Aplicació estàtica en català amb dos modes independents basats en `fitosT1 (1)-18-24_merged.pdf` i `fitosT2 (2).pdf`.

## Obrir l’app

Obriu `index.html` en un navegador. No cal instal·lar res ni connexió a Internet. Manteniu tots els fitxers i la carpeta `images` junts. També es pot servir aquesta carpeta amb qualsevol servidor HTTP estàtic.

## Com es juga

- Cada sessió té 10 rondes amb fitxes diferents.
- Cada ronda mostra una fotografia del PDF i 2 o 3 preguntes. Els casos amb menys informació no reben preguntes inventades.
- Es barregen les fitxes, les variants de fotografia, les preguntes i les respostes. Reiniciar evita començar per la fitxa que s’acaba de veure.
- Un encert val un punt. No hi ha penalització ni límit de temps. La primera resposta queda bloquejada.
- La correcció indica la pàgina impresa. Després de cada resposta, correcta o incorrecta, el botó «Mostra la fitxa d’estudi» permet consultar voluntàriament la fitxa completa. Substitueix la pregunta i les respostes al mateix espai; «Torna a la pregunta» les recupera sense alterar la puntuació. Les fitxes llargues es desplacen dins del panell. També es pot consultar la fotografia original amb el rètol.
- Al final es mostren la puntuació i les respostes per repassar. «Reinicia» comença una sessió nova.

## Fitxers

- `index.html`: interfície accessible i adaptable.
- `styles.css`: disseny mòbil i escriptori.
- `engine.js`: aleatorització i selecció de preguntes, sense dependències.
- `app.js`: interacció, correcció, puntuació i resum.
- `data.js`: banc de 34 fitxes i 208 preguntes.
- `content.json`: còpia llegible i auditable del contingut, amb referències.
- `images/`: 39 fotografies retallades per al joc i 39 versions amb rètol per consultar la font.
- `images/provenance.json`: pàgina, tira original i coordenades del retall de cada fotografia.
- `AUDIT.md`: criteris editorials, ambigüitats i exclusions.

## GitHub Pages

Es pot publicar el contingut d’aquesta carpeta a l’arrel d’un repositori nou o en una carpeta nova d’un repositori que ja utilitzi Pages. Tots els enllaços són relatius; no hi ha rutes que comencin amb `/` ni cap compilació.

Una ruta independent possible al repositori existent és `plagues/`, sempre que aquesta carpeta no existeixi. Això no requereix canviar `imagenes/plantgame.html` ni la configuració actual de Pages.

## Font i crèdits

«Coneix les plagues que afecten els cultius», Escola Agrària, pàgines impreses 18–24, 29 i 30 (9 pàgines del PDF facilitat). Les fotografies i els textos provenen d’aquest document. Es conserven els crèdits visibles a les imatges originals, inclosos Carme Serrano, Hectonichus, Ramon Toro, G. Barrios i A. Torrell. No s’atribueix autoria pròpia sobre aquestes fotografies ni s’hi aplica una llicència nova.

S’han mantingut els noms i grafies del PDF. Les mencions normatives s’estudien segons el document, sense actualitzar-les amb fonts externes. No s’han seguit els enllaços de fitxes externes.

## Mode de malalties

La pantalla inicial permet triar **Plagues** o **Malalties**. «Canvia de joc» torna al selector; cada selecció comença una sessió nova i independent. El nou mode utilitza `fitosT2 (2).pdf`: 49 fitxes, 51 fotografies i 231 preguntes sobre agents, grups, cultius, símptomes i vectors.

Fitxers: `disease-data.js`, `disease-content.json`, `images/disease-*.jpg`, `images/disease-provenance.json` i `DISEASE-AUDIT.md`. Tot funciona sense compilació i amb rutes relatives. El contingut continua en català i els noms dels fitxers són en anglès.
