# Faboesi Verkooppunten Kaart

Interactieve kaart van alle winkels waar Faboesi honing verkrijgbaar is.
Data komt van [faboesi.com/winkels](https://faboesi.com/winkels) (opgehaald 2026-07-13).

## Openen

Dubbelklik op `index.html` — werkt direct in de browser, geen server of API-key nodig
(kaarttegels via OpenStreetMap/CARTO, wel internet nodig).

## Winkels toevoegen / wijzigen

Alles staat in `stores.js`. Kopieer een regel en pas naam, adres en coördinaten aan:

```js
{ name: "Nieuwe Winkel", address: "Straatnaam 12", lat: 5.82345, lon: -55.16789, approx: true },
```

Coördinaten vinden: **rechtsklik op de kaart** → de coördinaten verschijnen in een
popup en worden naar het klembord gekopieerd.

## Controleren of de site is veranderd

```
python check_updates.py
```

Vergelijkt de live winkels-pagina met `stores.js` en meldt nieuwe of verdwenen winkels.

## Bestanden

- `index.html` — de kaart (Leaflet + donkere CARTO-tiles, Faboesi-huisstijl)
- `stores.js` — winkeldata per gebied (Hoofdkantoor / Paramaribo / Lelydorp & Wanica)
- `check_updates.py` — sync-check tegen faboesi.com/winkels
