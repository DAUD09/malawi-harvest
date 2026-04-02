export const districts = [
  'Blantyre', 'Lilongwe', 'Zomba', 'Mzuzu',
  'Kasungu', 'Balaka', 'Mchinji', 'Ntcheu',
]

// priceKg = current week, lastWeekKg = previous week (for trend arrows)
export const seedPrices = [
  // ── MAIZE (Chimanga) ──────────────────────────────────────────
  { id: 'maize-blantyre',  cropId: 'maize', district: 'Blantyre', market: 'Limbe Market',      priceKg: 380, lastWeekKg: 340, source: 'ADMARC', date: '2026-03-28' },
  { id: 'maize-lilongwe',  cropId: 'maize', district: 'Lilongwe', market: 'Area 25 Market',    priceKg: 350, lastWeekKg: 360, source: 'ADMARC', date: '2026-03-28' },
  { id: 'maize-zomba',     cropId: 'maize', district: 'Zomba',    market: 'Zomba Market',      priceKg: 365, lastWeekKg: 340, source: 'ADMARC', date: '2026-03-28' },
  { id: 'maize-mzuzu',     cropId: 'maize', district: 'Mzuzu',    market: 'Mzuzu Market',      priceKg: 410, lastWeekKg: 380, source: 'ADMARC', date: '2026-03-28' },
  { id: 'maize-kasungu',   cropId: 'maize', district: 'Kasungu',  market: 'Kasungu Boma',      priceKg: 320, lastWeekKg: 310, source: 'ADMARC', date: '2026-03-28' },
  { id: 'maize-balaka',    cropId: 'maize', district: 'Balaka',   market: 'Balaka Market',     priceKg: 355, lastWeekKg: 370, source: 'ADMARC', date: '2026-03-28' },
  { id: 'maize-mchinji',   cropId: 'maize', district: 'Mchinji',  market: 'Mchinji Border',    priceKg: 340, lastWeekKg: 325, source: 'ADMARC', date: '2026-03-28' },
  { id: 'maize-ntcheu',    cropId: 'maize', district: 'Ntcheu',   market: 'Ntcheu Boma',       priceKg: 360, lastWeekKg: 355, source: 'ADMARC', date: '2026-03-28' },

  // ── SOYBEAN (Soya) ────────────────────────────────────────────
  { id: 'soybean-blantyre', cropId: 'soybean', district: 'Blantyre', market: 'Limbe Market',   priceKg: 820, lastWeekKg: 860, source: 'ACE', date: '2026-03-28' },
  { id: 'soybean-lilongwe', cropId: 'soybean', district: 'Lilongwe', market: 'Area 25 Market', priceKg: 800, lastWeekKg: 790, source: 'ACE', date: '2026-03-28' },
  { id: 'soybean-zomba',    cropId: 'soybean', district: 'Zomba',    market: 'Zomba Market',   priceKg: 790, lastWeekKg: 810, source: 'ACE', date: '2026-03-28' },
  { id: 'soybean-mzuzu',    cropId: 'soybean', district: 'Mzuzu',    market: 'Mzuzu Market',   priceKg: 850, lastWeekKg: 830, source: 'ACE', date: '2026-03-28' },
  { id: 'soybean-kasungu',  cropId: 'soybean', district: 'Kasungu',  market: 'Kasungu Boma',   priceKg: 770, lastWeekKg: 750, source: 'ACE', date: '2026-03-28' },
  { id: 'soybean-balaka',   cropId: 'soybean', district: 'Balaka',   market: 'Balaka Market',  priceKg: 810, lastWeekKg: 840, source: 'ACE', date: '2026-03-28' },
  { id: 'soybean-mchinji',  cropId: 'soybean', district: 'Mchinji',  market: 'Mchinji Border', priceKg: 830, lastWeekKg: 815, source: 'ACE', date: '2026-03-28' },
  { id: 'soybean-ntcheu',   cropId: 'soybean', district: 'Ntcheu',   market: 'Ntcheu Boma',    priceKg: 795, lastWeekKg: 800, source: 'ACE', date: '2026-03-28' },

  // ── GROUNDNUT (Mtedza) ────────────────────────────────────────
  { id: 'groundnut-blantyre', cropId: 'groundnut', district: 'Blantyre', market: 'Limbe Market',   priceKg: 1150, lastWeekKg: 1060, source: 'ADMARC', date: '2026-03-28' },
  { id: 'groundnut-lilongwe', cropId: 'groundnut', district: 'Lilongwe', market: 'Area 25 Market', priceKg: 1100, lastWeekKg: 1090, source: 'ADMARC', date: '2026-03-28' },
  { id: 'groundnut-zomba',    cropId: 'groundnut', district: 'Zomba',    market: 'Zomba Market',   priceKg: 1080, lastWeekKg: 1100, source: 'ADMARC', date: '2026-03-28' },
  { id: 'groundnut-mzuzu',    cropId: 'groundnut', district: 'Mzuzu',    market: 'Mzuzu Market',   priceKg: 1200, lastWeekKg: 1150, source: 'ADMARC', date: '2026-03-28' },
  { id: 'groundnut-kasungu',  cropId: 'groundnut', district: 'Kasungu',  market: 'Kasungu Boma',   priceKg: 1050, lastWeekKg: 1020, source: 'ADMARC', date: '2026-03-28' },
  { id: 'groundnut-balaka',   cropId: 'groundnut', district: 'Balaka',   market: 'Balaka Market',  priceKg: 1120, lastWeekKg: 1140, source: 'ADMARC', date: '2026-03-28' },
  { id: 'groundnut-mchinji',  cropId: 'groundnut', district: 'Mchinji',  market: 'Mchinji Border', priceKg: 1160, lastWeekKg: 1100, source: 'ADMARC', date: '2026-03-28' },
  { id: 'groundnut-ntcheu',   cropId: 'groundnut', district: 'Ntcheu',   market: 'Ntcheu Boma',    priceKg: 1090, lastWeekKg: 1070, source: 'ADMARC', date: '2026-03-28' },

  // ── PIGEON PEA (Nandolo) ──────────────────────────────────────
  { id: 'pigeon_pea-blantyre', cropId: 'pigeon_pea', district: 'Blantyre', market: 'Limbe Market',   priceKg: 690, lastWeekKg: 705, source: 'ACE', date: '2026-03-28' },
  { id: 'pigeon_pea-lilongwe', cropId: 'pigeon_pea', district: 'Lilongwe', market: 'Area 25 Market', priceKg: 670, lastWeekKg: 650, source: 'ACE', date: '2026-03-28' },
  { id: 'pigeon_pea-zomba',    cropId: 'pigeon_pea', district: 'Zomba',    market: 'Zomba Market',   priceKg: 700, lastWeekKg: 720, source: 'ACE', date: '2026-03-28' },
  { id: 'pigeon_pea-mzuzu',    cropId: 'pigeon_pea', district: 'Mzuzu',    market: 'Mzuzu Market',   priceKg: 720, lastWeekKg: 700, source: 'ACE', date: '2026-03-28' },
  { id: 'pigeon_pea-kasungu',  cropId: 'pigeon_pea', district: 'Kasungu',  market: 'Kasungu Boma',   priceKg: 650, lastWeekKg: 640, source: 'ACE', date: '2026-03-28' },
  { id: 'pigeon_pea-balaka',   cropId: 'pigeon_pea', district: 'Balaka',   market: 'Balaka Market',  priceKg: 680, lastWeekKg: 710, source: 'ACE', date: '2026-03-28' },
  { id: 'pigeon_pea-mchinji',  cropId: 'pigeon_pea', district: 'Mchinji',  market: 'Mchinji Border', priceKg: 695, lastWeekKg: 680, source: 'ACE', date: '2026-03-28' },
  { id: 'pigeon_pea-ntcheu',   cropId: 'pigeon_pea', district: 'Ntcheu',   market: 'Ntcheu Boma',    priceKg: 665, lastWeekKg: 660, source: 'ACE', date: '2026-03-28' },

  // ── COWPEA (Nyemba) ───────────────────────────────────────────
  { id: 'cowpea-blantyre', cropId: 'cowpea', district: 'Blantyre', market: 'Limbe Market',   priceKg: 750, lastWeekKg: 720, source: 'Market survey', date: '2026-03-28' },
  { id: 'cowpea-lilongwe', cropId: 'cowpea', district: 'Lilongwe', market: 'Area 25 Market', priceKg: 730, lastWeekKg: 740, source: 'Market survey', date: '2026-03-28' },
  { id: 'cowpea-zomba',    cropId: 'cowpea', district: 'Zomba',    market: 'Zomba Market',   priceKg: 720, lastWeekKg: 700, source: 'Market survey', date: '2026-03-28' },
  { id: 'cowpea-mzuzu',    cropId: 'cowpea', district: 'Mzuzu',    market: 'Mzuzu Market',   priceKg: 780, lastWeekKg: 760, source: 'Market survey', date: '2026-03-28' },
  { id: 'cowpea-kasungu',  cropId: 'cowpea', district: 'Kasungu',  market: 'Kasungu Boma',   priceKg: 700, lastWeekKg: 690, source: 'Market survey', date: '2026-03-28' },
  { id: 'cowpea-balaka',   cropId: 'cowpea', district: 'Balaka',   market: 'Balaka Market',  priceKg: 740, lastWeekKg: 760, source: 'Market survey', date: '2026-03-28' },
  { id: 'cowpea-mchinji',  cropId: 'cowpea', district: 'Mchinji',  market: 'Mchinji Border', priceKg: 755, lastWeekKg: 730, source: 'Market survey', date: '2026-03-28' },
  { id: 'cowpea-ntcheu',   cropId: 'cowpea', district: 'Ntcheu',   market: 'Ntcheu Boma',    priceKg: 715, lastWeekKg: 705, source: 'Market survey', date: '2026-03-28' },

  // ── SUNFLOWER (Mafuta Apakamwa) ───────────────────────────────
  { id: 'sunflower-blantyre', cropId: 'sunflower', district: 'Blantyre', market: 'Limbe Market',   priceKg: 550, lastWeekKg: 530, source: 'Market survey', date: '2026-03-28' },
  { id: 'sunflower-lilongwe', cropId: 'sunflower', district: 'Lilongwe', market: 'Area 25 Market', priceKg: 530, lastWeekKg: 540, source: 'Market survey', date: '2026-03-28' },
  { id: 'sunflower-zomba',    cropId: 'sunflower', district: 'Zomba',    market: 'Zomba Market',   priceKg: 520, lastWeekKg: 510, source: 'Market survey', date: '2026-03-28' },
  { id: 'sunflower-mzuzu',    cropId: 'sunflower', district: 'Mzuzu',    market: 'Mzuzu Market',   priceKg: 570, lastWeekKg: 550, source: 'Market survey', date: '2026-03-28' },
  { id: 'sunflower-kasungu',  cropId: 'sunflower', district: 'Kasungu',  market: 'Kasungu Boma',   priceKg: 500, lastWeekKg: 490, source: 'Market survey', date: '2026-03-28' },
  { id: 'sunflower-balaka',   cropId: 'sunflower', district: 'Balaka',   market: 'Balaka Market',  priceKg: 540, lastWeekKg: 555, source: 'Market survey', date: '2026-03-28' },
  { id: 'sunflower-mchinji',  cropId: 'sunflower', district: 'Mchinji',  market: 'Mchinji Border', priceKg: 555, lastWeekKg: 535, source: 'Market survey', date: '2026-03-28' },
  { id: 'sunflower-ntcheu',   cropId: 'sunflower', district: 'Ntcheu',   market: 'Ntcheu Boma',    priceKg: 525, lastWeekKg: 520, source: 'Market survey', date: '2026-03-28' },
]