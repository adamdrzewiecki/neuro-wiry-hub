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
  { slug: "jadra-podstawy", title: "Jądra podstawy", subcategories: [] },
  { slug: "uklad-pozapiramidowy", title: "Układ pozapiramidowy", subcategories: [] },
  { slug: "istota-biala", title: "Istota biała", subcategories: [] },
  { slug: "komory-mozgu", title: "Komory mózgu", subcategories: [] },
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

  { slug: "drogi-nerwowe", title: "Drogi nerwowe", subcategories: [] },
  { slug: "uklad-nerwowy-autonomiczny", title: "Układ nerwowy autonomiczny", subcategories: [] },
  { slug: "uklad-czuciowy", title: "Układ czuciowy", subcategories: [] },
  { slug: "uklad-ruchowy", title: "Układ ruchowy", subcategories: [] },
  { slug: "zmysly", title: "Zmysły", subcategories: [] },
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
