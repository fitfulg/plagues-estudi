# QUALIFITOS

Aplicació estàtica en català amb quatre modes independents basats en `fitosT1.pdf`, `fitosT2.pdf`, `fitosT3.pdf` i `fitosT4.pdf`.

## Obrir l’app

Obriu `index.html` en un navegador. No cal instal·lar res ni connexió a Internet. Manteniu tots els fitxers i la carpeta `images` junts. També es pot servir aquesta carpeta amb qualsevol servidor HTTP estàtic.

## Com es juga

- Cada sessió té 10 rondes amb fitxes diferents.
- Cada ronda mostra una fotografia, un esquema o una imatge de suport amb 2 preguntes. Els casos amb menys informació no reben preguntes inventades.
- Es barregen les fitxes, les variants de fotografia, les preguntes i les respostes. Reiniciar evita començar per la fitxa que s’acaba de veure.
- Un encert val un punt. No hi ha penalització ni límit de temps. La primera resposta queda bloquejada.
- La correcció indica la pàgina impresa. Després de cada resposta, correcta o incorrecta, el botó «Mostra la fitxa d’estudi» permet consultar voluntàriament la fitxa completa. Substitueix la pregunta i les respostes al mateix espai; «Torna a la pregunta» les recupera sense alterar la puntuació. Les fitxes llargues es desplacen dins del panell. També es pot consultar la fotografia original amb el rètol.
- Al final es mostren la puntuació i les respostes per repassar. «Reinicia» comença una sessió nova.

## Fitxers

- `index.html`: interfície accessible i adaptable.
- `styles.css`: disseny mòbil i escriptori.
- `engine.js`: aleatorització i selecció de preguntes, sense dependències.
- `app.js`: interacció, correcció, puntuació i resum.
- `data.js`: banc de 40 fitxes i 80 preguntes.
- `content.json`: còpia llegible i auditable del contingut, amb referències.
- `images/`: fotografies, esquemes i il·lustracions dels quatre temaris amb les seves versions originals.
- `images/provenance.json`: pàgina, tira original i coordenades del retall de cada fotografia.
- `AUDIT.md`: criteris editorials, ambigüitats i exclusions.

## GitHub Pages

Es pot publicar el contingut d’aquesta carpeta a l’arrel d’un repositori nou o en una carpeta nova d’un repositori que ja utilitzi Pages. Tots els enllaços són relatius; no hi ha rutes que comencin amb `/` ni cap compilació.

Publicació actual: https://fitfulg.github.io/plagues-estudi/ (repositori `fitfulg/plagues-estudi`).

## Font i crèdits

«Coneix les plagues que afecten els cultius», Escola Agrària, PDF complet de 34 pàgines, actualitzat el 03/02/2025. Les fotografies i els textos provenen d’aquest document. Es conserven els crèdits visibles a les imatges originals, inclosos Carme Serrano, Hectonichus, Ramon Toro, G. Barrios i A. Torrell. No s’atribueix autoria pròpia sobre aquestes fotografies ni s’hi aplica una llicència nova.

S’han mantingut els noms i grafies del PDF. Les mencions normatives s’estudien segons el document, sense actualitzar-les amb fonts externes. No s’han seguit els enllaços de fitxes externes.

## Mode de malalties

La pantalla inicial permet triar **Plagues**, **Malalties**, **Vegetació espontània** o **Protecció de cultius**. «Canvia de joc» torna al selector; cada selecció comença una sessió nova i independent. El nou mode utilitza `fitosT2.pdf`: 40 fitxes, 42 variants d’imatge i 80 preguntes sobre conceptes, agents, cultius, símptomes, transmissió i diagnosi.

Fitxers: `disease-data.js`, `disease-content.json`, `images/disease-*.jpg`, `images/disease-provenance.json` i `DISEASE-AUDIT.md`. Tot funciona sense compilació i amb rutes relatives. El contingut continua en català i els noms dels fitxers són en anglès.

## Vegetació espontània

40 fitxes, 58 variants d’imatge i 80 preguntes. Noms, famílies, trets, cicles vitals, hàbitats, reproducció i parasitisme. `weed-data.js` i `weed-content.json` contenen el banc; `images/weed-provenance.json` referencia els originals. Consulteu `WEED-AUDIT.md` per als criteris de fidelitat i les exclusions.


## Protecció de cultius — Tema 4

39 fitxes, 39 imatges i 78 preguntes basades exclusivament en `fitosT4.pdf`, «Protegeix els teus cultius». Imatges i casos de prevenció, mètodes culturals, físics, biològics, biotècnics, químics, seguiment i llindars. Cada sessió tria 10 fitxes amb 2 preguntes per ronda. `protection-data.js`, `protection-content.json`, `images/protection-provenance.json` i `PROTECTION-AUDIT.md` documenten el nou banc.

## Versions

Versió actual: **1.6.0**. La marca es mostra al costat del títol. Amb cada nou tema o canvi substancial, incrementar la versió menor (1.7.0, 1.8.0…). Per correccions petites, incrementar el pedaç (1.6.1…). Reservar la versió major per canvis incompatibles. Actualitzar la marca i el seu text accessible a `index.html`, les claus de memòria cau dels recursos modificats, aquesta secció i `CHANGELOG.md` en publicar.

## Tema 1 refet per aprendre

40 fitxes i 80 preguntes sobre el PDF complet `fitosT1.pdf`. Les 10 rondes reparteixen 2 o 3 fitxes de cadascun dels quatre blocs: fonaments i diagnosi, biologia dels insectes, plagues d’insectes, i àcars i altres organismes. Totes les preguntes són seleccionables; no es força una identificació a cada ronda ni es demanen nom comú i científic junts. Els casos sense fotografia pròpia són textuals i estan marcats. `images/pest-full-provenance.json` documenta els recursos i la correspondència exacta de les fotografies conservades. Els altres modes mantenen el seu funcionament.

## Tema 2 refet per aprendre

El PDF complet de 47 pàgines sustenta 40 fitxes i 80 preguntes. Cada sessió de 10 rondes inclou els sis blocs (1 o 2 rondes per bloc): fonaments i diagnosi, fongs, bacteris, fitoplasmes, virus i viroides, i nematodes. Cada ronda tria dues preguntes de tipus diferents i no combina identificació i nom científic. Els casos textuals sense fotografia específica estan indicats. Es preserven les grafies i la classificació del temari, amb les exclusions documentades a `DISEASE-AUDIT.md`.

## Tema 3 refet per aprendre

El PDF complet de 66 pàgines sustenta 40 fitxes i 80 preguntes. Cada sessió alterna quatre blocs, amb 2 o 3 rondes de cadascun: ecologia i competència; botànica, hàbitats i observació; cicles i reproducció; espècies i parasitisme. Dues preguntes de tipus diferents per ronda, sense forçar identificació ni combinar nom comú i científic. La selecció essencial inclou 20 fitxes d’espècies i 20 de conceptes.

## Selecció essencial

La versió 1.5.0 limita cada banc a unes 80 preguntes: 80 de plagues, 80 de malalties, 80 de vegetació espontània i 78 de protecció de cultius. La selecció prioritza conceptes, diagnosi i diferències útils, i elimina repeticions. `CURATION.md` documenta cada pregunta seleccionada. Les fitxes d’estudi dels casos seleccionats es conserven completes.

## Bancs descarregables en PDF

La versió 1.6.0 incorpora un enllaç de descàrrega a cada tema i al peu del joc. Els quatre documents de `downloads/` contenen les 80/80/80/78 preguntes actives, opcions A–D, imatges per interpretar els casos i solucionari amb explicacions i pàgines de referència. Text seleccionable i imprimible; no es descarrega JSON des de la interfície. En actualitzar un banc, cal regenerar-ne el PDF i la clau de memòria cau del seu enllaç.
