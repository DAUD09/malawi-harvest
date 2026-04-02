# 🌽 MalawiHarvest

**Know your crop's worth before you sell.**  
*Dziwani mtengo wa mbewu yanu musanagulitse.*

A free crop market price tracker for Malawian smallholder farmers — built to close the information gap between farmers and middlemen.

🔗 **Live app:** [daud09.github.io/malawi-harvest](https://daud09.github.io/malawi-harvest/)

---

## Features

- **Price cards** — current market prices per crop per district, with trend arrows vs last week
- **Harvest calculator** — enter kg or bags, see your harvest's value across all 8 districts
- **Seasonal calendar** — which crops to plant, grow, harvest and sell each month
- **Chichewa / English toggle** — full bilingual support throughout
- **Community reporting** — farmers can report prices from their local market (localStorage)
- **Market tips** — actionable selling advice per crop

## Districts covered

Blantyre · Lilongwe · Zomba · Mzuzu · Kasungu · Balaka · Mchinji · Ntcheu

## Crops tracked

Maize (Chimanga) · Soybean (Soya) · Groundnut (Mtedza) · Pigeon Pea (Nandolo) · Cowpea (Nyemba) · Sunflower

## Tech stack

| Layer | Choice |
|---|---|
| Framework | React 19 + Vite 8 |
| Styling | Tailwind CSS v4 + CSS custom properties |
| Routing | React Router v7 (HashRouter for gh-pages) |
| Storage | localStorage (community reports) |
| Deploy | GitHub Pages via gh-pages + GitHub Actions CI/CD |
| Fonts | Fraunces (headings) + IBM Plex Sans (body) |

## Data

No free real-time Malawi crop price API exists. Prices are seeded from  
**ADMARC and ACE Africa historical data** and supplemented by community  
reports from farmers. This is the standard civic tech model in emerging  
markets — upgradeable to a live backend when data partnerships are established.

## Running locally
```bash
git clone https://github.com/DAUD09/malawi-harvest.git
cd malawi-harvest
npm install
npm run dev
```

## Deploying

Push to `main` — GitHub Actions handles the rest automatically.  
Manual deploy: `npm run deploy`

## Roadmap

- [ ] PWA support (offline-first with service worker)
- [ ] Push notifications for price alerts
- [ ] Real-time price API integration (ADMARC partnership)
- [ ] SMS price lookup (feature phone support)
- [ ] More districts and crops
- [ ] Photo-based community price verification

## Built by

[Daudi Symon](https://daud09.github.io/daudi-portfolio) · Blantyre, Malawi