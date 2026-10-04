# Tema 2: auditoria del contingut

Font exclusiva: `fitosT2.pdf`, «Coneix les malalties que afecten els cultius», 47 pàgines, data interna 03/02/2025. S’ha revisat el text i la maquetació de totes les pàgines. El fitxer és idèntic byte a byte a `fitosT2 (2).pdf`; el SHA-256 del document es conserva a `disease-content.json`.

## Cobertura i aprenentatge

82 fitxes, 324 preguntes i 84 variants d’imatge. Es conserven les 49 fitxes de casos, revisades amb el document complet, i s’hi afegeixen 33 fitxes conceptuals i casos textuals. Les sessions alternen sis blocs, amb 1 o 2 rondes per bloc: fonaments i diagnosi; fongs; bacteris; fitoplasmes; virus i viroides; nematodes. Dues preguntes de tipus diferents per ronda. Totes són seleccionables i mai es combinen identificació i nom científic en una mateixa ronda.

- Pàgines 5–6: infecció, fisiopatia, hoste, patogen i ambient.
- Pàgines 7–11: hifes, miceli, incubació, fongs beneficiosos, reproducció, localització, necrosi, hipertròfia i hiperplàsia.
- Pàgines 12–24: casos de malalties fúngiques, mal de coll i bloqueig vascular.
- Pàgines 25–30: estructura, vies d’entrada, transmissió, bacteris beneficiosos, símptomes i casos.
- Pàgines 31–34: estructura, floema, vectors, latència, virescència, fil·lòdia i casos de fitoplasmes.
- Pàgines 35–41: estructura, dependència cel·lular, viroides, transmissió, cultiu in vitro, símptomes i casos, inclosa l’exocortis.
- Pàgines 42–43: cos, estilet, reproducció, supervivència, nematodes beneficiosos, nòduls, parts aèries, vectors i decaïment del pi.
- Pàgines 44–47: límits del diagnòstic visual, laboratori, examen general, seguiment, registres i òrgans afectats.

## Imatges i fonts

`images/disease-provenance.json` conserva per a cada recurs la pàgina, l’índex de la imatge nativa i el retall. Les imatges noves es componen sobre blanc per preservar transparències. La imatge original reapareix en respondre qualsevol opció. Els rètols de les fotografies antigues continuen ocults durant la pregunta.

Les imatges genèriques indiquen que són suport conceptual. Els casos sense fotografia específica (mal de coll, Fusarium/verticil·losi, bacteris beneficiosos, exocortis i casos de nematodes de la pàgina 43) utilitzen l’escena d’observació de la pàgina 44 i ho indiquen explícitament. Cada pregunta concreta el tema; no demana identificar aquestes afeccions a partir de la fotografia de suport. No es converteix la fotografia dels palets en una fotografia del nematode del pi.

## Fidelitat i exclusions

- Grafies científiques conservades, incloses Botrytis cinera, Puccinia gramis, Colletorichum lindemuthianum, Cacopsyilla pyri i Tomato yeallow leaf curl virus-TYLCV. La variant Rosellinia/Rossellinia s’explica a la fitxa.
- Es manté la classificació del temari (inclosos els míldius a l’apartat de fongs); les preguntes de grup es refereixen a aquesta classificació.
- No es converteix en pregunta l’afirmació general que tots els fongs són paràsits obligats, perquè el mateix document presenta sapròfits i altres formes de vida. Tampoc es pregunta la prevalença de Gram positius entre fitopatògens. Sí que es pregunta el fonament de la tinció de Gram.
- S’exclouen normativa vigent, distribució actual, dates històriques, productes autoritzats i recomanacions de tractament. No es consulten els enllaços externs.
- Carbó nu d’ordi/blat i motejat de pomera/perera continuen com a casos conjunts; les fotografies genèriques de nematodes no identifiquen un gènere concret.
- Els símptomes s’estudien com a característiques del cas del document, no com a diagnòstics exclusius. La necessitat de laboratori davant símptomes semblants és un objectiu explícit.
- Distractors amb termes, agents i processos del mateix temari. Els distractors de noms es restringeixen al mateix grup quan hi ha prou alternatives.
