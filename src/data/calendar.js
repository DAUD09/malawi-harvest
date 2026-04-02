// months[0] = January ... months[11] = December
// 'sell' = best time to sell (prices highest), 'plant/grow/harvest' = crop lifecycle
export const calendarData = {
  maize: {
    months: ['harvest','harvest','harvest','harvest','sell','sell','sell','sell','off','off','plant','plant'],
    tip: {
      en: 'Plant with first rains November–December. Harvest March–April. Prices peak May–August as stocks run low — store your crop and sell into that window.',
      ny: 'Limalani ndi mvula ya Novembara–Disembara. Kolani Marichi–Aprili. Mitengo imakwera May–Ogasiti — sungani ndi kugulitsa pa nthawi imeneyo.',
    },
  },
  soybean: {
    months: ['grow','grow','grow','harvest','harvest','sell','sell','sell','off','off','plant','plant'],
    tip: {
      en: 'Plant November–December. Harvest April–May. Dry to under 12% moisture before selling. Best prices at ACE buying points June–August.',
      ny: 'Limalani Novembara–Disembara. Kolani Aprili–Mei. Onutsani mpaka 12% pamadzi. Mitengo yabwino ku ACE June–Ogasiti.',
    },
  },
  groundnut: {
    months: ['grow','grow','harvest','harvest','harvest','sell','sell','sell','sell','off','plant','plant'],
    tip: {
      en: 'Plant November–January. Harvest April–June. Thorough drying is critical — aflatoxin contamination destroys export value. Best prices July–October.',
      ny: 'Limalani Novembara–Januware. Kolani Aprili–June. Kunutsa bwino ndi chofunika — aflatoxin imawononga mtengo. Mitengo yabwino July–Okutobala.',
    },
  },
  pigeon_pea: {
    months: ['grow','grow','grow','grow','harvest','harvest','harvest','sell','sell','sell','plant','plant'],
    tip: {
      en: 'Long-season crop. Plant October–November, harvest May–July. Export demand keeps prices strong September–December — hold stock if you can.',
      ny: 'Mbewu yokhala nthawi yayitali. Limalani Okutobala–Novembara, kolani May–July. Kugulitsa kwakunja kumakhala kwabwino September–Disembara.',
    },
  },
  cowpea: {
    months: ['grow','grow','harvest','harvest','sell','sell','sell','off','off','off','plant','plant'],
    tip: {
      en: 'Fast turnaround: plant November–December, harvest March–April. Sort and clean before selling — sorted cowpeas earn 15–20% more in urban markets.',
      ny: 'Mbewu yokula msanga: limalani Novembara–Disembara, kolani Marichi–Aprili. Sangani ndi kutsekula — nyemba yosankha imagulidwa 15–20% pamwamba.',
    },
  },
  sunflower: {
    months: ['grow','grow','harvest','harvest','sell','sell','sell','sell','off','off','plant','plant'],
    tip: {
      en: 'Plant November–January, harvest April–May. Sell directly to oil processors like Sunseed or NFAM rather than a middleman for the best price.',
      ny: 'Limalani Novembara–Januware, kolani Aprili–Mei. Gulitsani mwachindunji kwa omumanga mafuta osati kwa wogulitsa pakati.',
    },
  },
}

export const monthNames = {
  en: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
  ny: ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Oga','Sep','Okt','Nov','Dis'],
}

// visual config for each status
export const statusConfig = {
  plant:   { label: { en: 'Planting',     ny: 'Kulima'   }, color: '#2D6A4F', short: 'P' },
  grow:    { label: { en: 'Growing',      ny: 'Kukula'   }, color: '#4A9E6E', short: 'G' },
  harvest: { label: { en: 'Harvest',      ny: 'Kukola'   }, color: '#E9A820', short: 'H' },
  sell:    { label: { en: 'Best to sell', ny: 'Gulitsa'  }, color: '#C1440E', short: '★' },
  off:     { label: { en: 'Off-season',   ny: 'Kupumula' }, color: '#D6C8B8', short: '—' },
}