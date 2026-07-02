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
  { slug: "mozgowie-i-rdzen-nerwowy", title: "Mózgowie i rdzeń nerwowy", subcategories: [] },
  { slug: "rdzen-kregowy", title: "Rdzeń kręgowy", subcategories: [] },
  { slug: "kresomozgowie", title: "Kresomózgowie", subcategories: [] },
  { slug: "miedzymozgowie", title: "Międzymózgowie", subcategories: [] },
  { slug: "pien-mozgu", title: "Pień mózgu", subcategories: [] },
  { slug: "mozdzek", title: "Móżdżek", subcategories: [] },
  { slug: "uklad-limbiczny", title: "Układ limbiczny", subcategories: [] },
  { slug: "jadra-podstawy", title: "Jądra podstawy", subcategories: [] },
  { slug: "uklad-pozapiramidowy", title: "Układ pozapiramidowy", subcategories: [] },
  { slug: "istota-biala", title: "Istota biała", subcategories: [] },
  { slug: "komory-mozgu", title: "Komory mózgu", subcategories: [] },
  { slug: "nerwy-czaszkowe", title: "Nerwy czaszkowe", subcategories: [] },
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
