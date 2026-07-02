export interface Category {
  slug: string;
  title: string;
}

export const categories: Category[] = [
  { slug: "ogolne", title: "Ogólne" },
  { slug: "mozgowie-i-rdzen-nerwowy", title: "Mózgowie i rdzeń nerwowy" },
  { slug: "rdzen-kregowy", title: "Rdzeń kręgowy" },
  { slug: "kresomozgowie", title: "Kresomózgowie" },
  { slug: "miedzymozgowie", title: "Międzymózgowie" },
  { slug: "pien-mozgu", title: "Pień mózgu" },
  { slug: "mozdzek", title: "Móżdżek" },
  { slug: "uklad-limbiczny", title: "Układ limbiczny" },
  { slug: "jadra-podstawy", title: "Jądra podstawy" },
  { slug: "uklad-pozapiramidowy", title: "Układ pozapiramidowy" },
  { slug: "istota-biala", title: "Istota biała" },
  { slug: "komory-mozgu", title: "Komory mózgu" },
  { slug: "nerwy-czaszkowe", title: "Nerwy czaszkowe" },
  { slug: "drogi-nerwowe", title: "Drogi nerwowe" },
  { slug: "uklad-nerwowy-autonomiczny", title: "Układ nerwowy autonomiczny" },
  { slug: "uklad-czuciowy", title: "Układ czuciowy" },
  { slug: "uklad-ruchowy", title: "Układ ruchowy" },
  { slug: "zmysly", title: "Zmysły" },
  { slug: "plat-czolowy", title: "Płat czołowy" },
  { slug: "plat-potyliczny", title: "Płat potyliczny" },
  { slug: "plat-ciemieniowy", title: "Płat ciemieniowy" },
  { slug: "plat-skroniowy", title: "Płat skroniowy" },
  { slug: "wyspa", title: "Wyspa" },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
