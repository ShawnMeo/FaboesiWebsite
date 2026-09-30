// ============================================================
// Faboesi verkooppunten — data
// Bron: https://faboesi.com/winkels (opgehaald 2026-07-13)
//
// Nieuwe winkel toevoegen? Kopieer een regel, pas naam/adres/
// coördinaten aan. Coördinaten vind je door op de kaart te
// rechtsklikken → "coördinaten kopiëren" (of via Google Maps).
// approx: true  = pin staat op de straat, niet op het exacte pand
// ============================================================

const STORE_DATA = {
  updated: "2026-07-13",
  source: "https://faboesi.com/winkels",

  regions: [
    {
      id: "hq",
      name: "Hoofdkantoor",
      color: "#f59e0b",
      // Dekkingsgebied (cirkel) — center [lat, lon], radius in meters
      area: { center: [5.7482, -55.2834], radius: 3000 },
      stores: [
        { name: "Faboesi Hoofdkantoor", address: "Peprepinweg 109, Koewarasan", lat: 5.7482, lon: -55.2834, approx: true, note: "Alle produkten verkrijgbaar" },
      ],
    },
    {
      id: "paramaribo",
      name: "Paramaribo Centrum & Omgeving",
      color: "#fbbf24",
      area: { center: [5.832, -55.163], radius: 5800 },
      stores: [
        { name: "Ali's Drugstore", address: "Tourtonnelaan", lat: 5.8333, lon: -55.1545, approx: true, note: "Honing & medicinale produkten" },
        { name: "Lin", address: "Verlengde Gemenelandsweg", lat: 5.8273, lon: -55.1848, approx: true },
        { name: "Tulip", address: "Verlengde Gemenelandsweg", lat: 5.8231, lon: -55.1742, approx: true },
        { name: "Combemarkt", address: "Grote Combéweg", lat: 5.8282, lon: -55.1514, approx: true },
        { name: "Combe Junior", address: "Kwattaweg", lat: 5.8382, lon: -55.1779, approx: true },
        { name: "Choi's", address: "Johannes Mungrastraat", lat: 5.8320, lon: -55.1927, approx: true },
        { name: "VCM Slagerij", address: "Johannes Mungrastraat", lat: 5.8308, lon: -55.1915, approx: true },
        { name: "Weng's", address: "Franchepanestraat", lat: 5.8203, lon: -55.1968, approx: true },
        { name: "Wang", address: "Anton Dragtenweg 186", lat: 5.8507, lon: -55.1082, approx: true },
        { name: "Lee Supermarket", address: "H. Benjaminstraat", lat: 5.8336, lon: -55.1410, approx: true },
        { name: "Cheng", address: "Gompertstraat 124", lat: 5.8564, lon: -55.1356, approx: true },
        { name: "Goldenrom", address: "Schietbaanweg 17", lat: 5.8403, lon: -55.1546, approx: true },
        { name: "Vangou", address: "J. Lachmonstraat", lat: 5.8145, lon: -55.1820, approx: true },
        { name: "Mahabier", address: "Koningsstraat", lat: 5.8178, lon: -55.1739, approx: true },
      ],
    },
    {
      id: "lelydorp",
      name: "Lelydorp & Wanica",
      color: "#a3e635",
      area: { center: [5.695, -55.213], radius: 3200 },
      stores: [
        { name: "Mahabier", address: "Indira Gandhiweg, Lelydorp", lat: 5.6924, lon: -55.2171, approx: true },
        { name: "Health and Rituals", address: "Indira Gandhiweg, Lelydorp", lat: 5.7040, lon: -55.2128, approx: true },
        { name: "Choi's Lelydorp", address: "Indira Gandhiweg, Lelydorp", lat: 5.6981, lon: -55.2152, approx: true },
        { name: "Super Slagerij", address: "Indira Gandhiweg, Lelydorp", lat: 5.6868, lon: -55.2189, approx: true },
        { name: "Dja foe Lee", address: "Lelydorperweg", lat: 5.6909, lon: -55.2075, approx: true },
        { name: "Shun Yi Da", address: "Bomaweg, Koewarasan", lat: 5.8043, lon: -55.2805, approx: true },
        { name: "Fruittuintje", address: "Luchthaven (J.A. Pengel)", lat: 5.4516, lon: -55.1789, approx: true },
      ],
    },
  ],
};
