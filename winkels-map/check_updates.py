"""Vergelijk de live winkels-pagina van faboesi.com met stores.js.

Gebruik:  python check_updates.py

Haalt https://faboesi.com/winkels op, leest de winkelnamen uit de
<strong>-tags, en meldt welke winkels nieuw zijn of van de site zijn
verdwenen ten opzichte van stores.js. Past niets automatisch aan.
"""
import re
import sys
import urllib.request
from pathlib import Path

HERE = Path(__file__).parent
URL = "https://faboesi.com/winkels"


def fetch_site_stores():
    req = urllib.request.Request(URL, headers={"User-Agent": "Mozilla/5.0 (faboesi winkels-map)"})
    with urllib.request.urlopen(req, timeout=30) as r:
        html = r.read().decode("utf-8", errors="replace")
    # Winkelnamen staan in <strong>Naam</strong> binnen de stores-list;
    # het hoofdkantoor staat als <h2 class="store-name">.
    names = re.findall(r"<strong>([^<]+)</strong>", html)
    if re.search(r"Faboesi Hoofdkantoor", html):
        names.append("Faboesi Hoofdkantoor")
    return {normalize(n) for n in names}


def local_stores():
    js = (HERE / "stores.js").read_text(encoding="utf-8")
    names = re.findall(r'name:\s*"([^"]+)"', js)
    # regio-namen uitsluiten (die hebben ook een name:-veld)
    region_names = re.findall(r'id:\s*"[^"]+",\s*\n\s*name:\s*"([^"]+)"', js)
    return {normalize(n) for n in names if n not in region_names}


def normalize(name):
    return re.sub(r"\s+", " ", name.replace("’", "'").strip()).lower()


def main():
    site = fetch_site_stores()
    local = local_stores()

    new = sorted(site - local)
    gone = sorted(local - site)

    print(f"Site:  {len(site)} winkels op {URL}")
    print(f"Kaart: {len(local)} winkels in stores.js\n")

    if not new and not gone:
        print("De kaart is up-to-date met de website.")
        return 0
    if new:
        print("NIEUW op de site (toevoegen aan stores.js):")
        for n in new:
            print(f"  + {n}")
    if gone:
        print("NIET MEER op de site (verwijderen uit stores.js?):")
        for n in gone:
            print(f"  - {n}")
    return 1


if __name__ == "__main__":
    sys.exit(main())
