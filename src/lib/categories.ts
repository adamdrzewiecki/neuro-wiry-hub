export interface Subcategory {
  slug: string;
  title: string;
}

export interface Category {
  slug: string;
  title: string;
  subcategories: Subcategory[];
}

export const categories: Category[] = [
  {
    slug: "ogolne",
    title: "Ogólne",
    subcategories: [
      { slug: "podzial-anatomiczny-ukladu-nerwowego", title: "Podział anatomiczny układu nerwowego" },
      { slug: "neurohistologia", title: "Neurohistologia" },
      { slug: "osrodki-i-drogi-ukladu-nerwowego", title: "Ośrodki i drogi układu nerwowego" },
      { slug: "rozwoj-ukladu-nerwowego", title: "Rozwój układu nerwowego" },
    ],
  },
  {
    slug: "mozgowie-i-rdzen-nerwowy",
    title: "Mózgowie i rdzeń nerwowy",
    subcategories: [
      { slug: "opony-mozgowo-rdzeniowe", title: "Opony mózgowo-rdzeniowe" },
      { slug: "plyn-mozgowo-rdzeniowy", title: "Płyn mózgowo-rdzeniowy" },
      { slug: "unaczynienie", title: "Unaczynienie" },
      { slug: "kolo-tetnicze-mozgu", title: "Koło tętnicze mózgu" },
      { slug: "zatoki-zylne", title: "Zatoki żylne" },
      { slug: "rozwoj-mozgowia", title: "Rozwój mózgowia" },
    ],
  },
  {
    slug: "rdzen-kregowy",
    title: "Rdzeń kręgowy",
    subcategories: [
      { slug: "budowa-zewnetrzna", title: "Budowa zewnętrzna" },
      { slug: "budowa-wewnetrzna", title: "Budowa wewnętrzna" },
      { slug: "istota-szara", title: "Istota szara" },
      { slug: "istota-biala", title: "Istota biała" },
      { slug: "segmenty-rdzenia", title: "Segmenty rdzenia" },
      { slug: "korzenie-nerwowe", title: "Korzenie nerwowe" },
    ],
  },
  {
    slug: "kresomozgowie",
    title: "Kresomózgowie",
    subcategories: [
      { slug: "polkule-mozgu", title: "Półkule mózgu" },
      { slug: "kora-mozgu", title: "Kora mózgu" },
      { slug: "platy-mozgu", title: "Płaty mózgu" },
      { slug: "komory-boczne", title: "Komory boczne" },
    ],
  },
  {
    slug: "miedzymozgowie",
    title: "Międzymózgowie",
    subcategories: [
      { slug: "wzgorze", title: "Wzgórze" },
      { slug: "podwzgorze", title: "Podwzgórze" },
      { slug: "niskowzgorze", title: "Niskowzgórze" },
      { slug: "nadwzgorze", title: "Nadwzgórze" },
      { slug: "komora-iii", title: "Komora III" },
    ],
  },
  {
    slug: "pien-mozgu",
    title: "Pień mózgu",
    subcategories: [
      { slug: "rdzen-przedluzony", title: "Rdzeń przedłużony" },
      { slug: "most", title: "Most" },
      { slug: "srodmozgowie", title: "Śródmózgowie" },
    ],
  },
  {
    slug: "mozdzek",
    title: "Móżdżek",
    subcategories: [
      { slug: "budowa", title: "Budowa" },
      { slug: "kora-mozdzku", title: "Kora móżdżku" },
      { slug: "jadra-mozdzku", title: "Jądra móżdżku" },
      { slug: "drogi-mozdzkowe", title: "Drogi móżdżkowe" },
    ],
  },
  {
    slug: "uklad-limbiczny",
    title: "Układ limbiczny",
    subcategories: [
      { slug: "hipokamp", title: "Hipokamp" },
      { slug: "cialo-migdalowate", title: "Ciało migdałowate" },
      { slug: "zakret-obreczy", title: "Zakręt obręczy" },
      { slug: "sklepienie", title: "Sklepienie" },
      { slug: "przegroda", title: "Przegroda" },
    ],
  },
  {
    slug: "jadra-podstawy",
    title: "Jądra podstawy",
    subcategories: [
      { slug: "prazkowie", title: "Prążkowie" },
      { slug: "galka-blada", title: "Gałka blada" },
      { slug: "istota-czarna", title: "Istota czarna" },
      { slug: "jadro-niskowzgorzowe", title: "Jądro niskowzgórzowe" },
      { slug: "polaczenia-jader-podstawy", title: "Połączenia jąder podstawy" },
      { slug: "znaczenie-kliniczne", title: "Znaczenie kliniczne" },
    ],
  },
  {
    slug: "uklad-pozapiramidowy",
    title: "Układ pozapiramidowy",
    subcategories: [
      { slug: "elementy-ukladu-pozapiramidowego", title: "Elementy układu pozapiramidowego" },
      { slug: "drogi-pozapiramidowe", title: "Drogi pozapiramidowe" },
      { slug: "regulacja-napiecia-miesniowego", title: "Regulacja napięcia mięśniowego" },
      { slug: "kontrola-ruchow-automatycznych", title: "Kontrola ruchów automatycznych" },
      { slug: "znaczenie-kliniczne", title: "Znaczenie kliniczne" },
    ],
  },
  {
    slug: "istota-biala",
    title: "Istota biała",
    subcategories: [
      { slug: "torebka-wewnetrzna", title: "Torebka wewnętrzna" },
      { slug: "torebka-zewnetrzna", title: "Torebka zewnętrzna" },
      { slug: "spoidla", title: "Spoidła" },
      { slug: "drogi-kojarzeniowe", title: "Drogi kojarzeniowe" },
      { slug: "promienistosc-wiencowa", title: "Promienistość wieńcowa" },
      { slug: "znaczenie-kliniczne", title: "Znaczenie kliniczne" },
    ],
  },
  {
    slug: "komory-mozgu",
    title: "Komory mózgu",
    subcategories: [
      { slug: "komory-boczne", title: "Komory boczne" },
      { slug: "komora-iii", title: "Komora III" },
      { slug: "wodociag-mozgu", title: "Wodociąg mózgu" },
      { slug: "komora-iv", title: "Komora IV" },
      { slug: "splot-naczyniowkowy", title: "Splot naczyniówkowy" },
      { slug: "plyn-mozgowo-rdzeniowy", title: "Płyn mózgowo-rdzeniowy" },
    ],
  },
  {
    slug: "nerwy-czaszkowe",
    title: "Nerwy czaszkowe",
    subcategories: [
      { slug: "i", title: "I" },
      { slug: "ii", title: "II" },
      { slug: "iii", title: "III" },
      { slug: "iv", title: "IV" },
      { slug: "v", title: "V" },
      { slug: "vi", title: "VI" },
      { slug: "vii", title: "VII" },
      { slug: "viii", title: "VIII" },
      { slug: "ix", title: "IX" },
      { slug: "x", title: "X" },
      { slug: "xi", title: "XI" },
      { slug: "xii", title: "XII" },
    ],
  },

  {
    slug: "drogi-nerwowe",
    title: "Drogi nerwowe",
    subcategories: [
      { slug: "drogi-wstepujace", title: "Drogi wstępujące" },
      { slug: "drogi-zstepujace", title: "Drogi zstępujące" },
      { slug: "drogi-kojarzeniowe", title: "Drogi kojarzeniowe" },
      { slug: "drogi-spoidlowe", title: "Drogi spoidłowe" },
      { slug: "drogi-projekcyjne", title: "Drogi projekcyjne" },
      { slug: "znaczenie-kliniczne", title: "Znaczenie kliniczne" },
    ],
  },
  {
    slug: "uklad-nerwowy-autonomiczny",
    title: "Układ nerwowy autonomiczny",
    subcategories: [
      { slug: "uklad-wspolczulny", title: "Układ współczulny" },
      { slug: "uklad-przywspolczulny", title: "Układ przywspółczulny" },
      { slug: "uklad-jelitowy", title: "Układ jelitowy" },
      { slug: "sploty-autonomiczne", title: "Sploty autonomiczne" },
      { slug: "neuroprzekazniki", title: "Neuroprzekaźniki" },
      { slug: "znaczenie-kliniczne", title: "Znaczenie kliniczne" },
    ],
  },
  {
    slug: "uklad-czuciowy",
    title: "Układ czuciowy",
    subcategories: [
      { slug: "czucie-powierzchowne", title: "Czucie powierzchowne" },
      { slug: "czucie-glebokie", title: "Czucie głębokie" },
      { slug: "czucie-trzewne", title: "Czucie trzewne" },
      { slug: "droga-sznurow-tylnych", title: "Droga sznurów tylnych" },
      { slug: "droga-rdzeniowo-wzgorzowa", title: "Droga rdzeniowo-wzgórzowa" },
      { slug: "integracja-czucia", title: "Integracja czucia" },
    ],
  },
  {
    slug: "uklad-ruchowy",
    title: "Układ ruchowy",
    subcategories: [
      { slug: "droga-piramidowa", title: "Droga piramidowa" },
      { slug: "drogi-pozapiramidowe", title: "Drogi pozapiramidowe" },
      { slug: "kora-ruchowa", title: "Kora ruchowa" },
      { slug: "motoneuron-gorny", title: "Motoneuron górny" },
      { slug: "motoneuron-dolny", title: "Motoneuron dolny" },
      { slug: "kontrola-ruchu", title: "Kontrola ruchu" },
    ],
  },
  {
    slug: "zmysly",
    title: "Zmysły",
    subcategories: [
      { slug: "uklad-wzrokowy", title: "Układ wzrokowy" },
      { slug: "uklad-sluchowy", title: "Układ słuchowy" },
      { slug: "uklad-przedsionkowy", title: "Układ przedsionkowy" },
      { slug: "uklad-wechowy", title: "Układ węchowy" },
      { slug: "uklad-smakowy", title: "Układ smakowy" },
      { slug: "integracja-sensoryczna", title: "Integracja sensoryczna" },
    ],
  },
  { slug: "plat-czolowy", title: "Płat czołowy", subcategories: [] },
  { slug: "plat-potyliczny", title: "Płat potyliczny", subcategories: [] },
  { slug: "plat-ciemieniowy", title: "Płat ciemieniowy", subcategories: [] },
  { slug: "plat-skroniowy", title: "Płat skroniowy", subcategories: [] },
  { slug: "wyspa", title: "Wyspa", subcategories: [] },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getSubcategory(categorySlug: string, subSlug: string) {
  const category = getCategoryBySlug(categorySlug);
  return category?.subcategories.find((s) => s.slug === subSlug);
}
