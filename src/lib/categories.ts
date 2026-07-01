export interface Category {
  slug: string;
  title: string;
}

export const categories: Category[] = [
  { slug: "ogolne", title: "Ogólne" },
  { slug: "mozgowie-i-rdzen-nerwowy", title: "Mózgowie i rdzeń nerwowy" },
  { slug: "rdzen-kregowy", title: "Rdzeń kręgowy" },
  { slug: "kresomozgowie-parzyste", title: "Kresomózgowie parzyste" },
  { slug: "kresomozgowie-srodkowe-i-komora-boczna", title: "Kresomózgowie środkowe i komora boczna" },
  { slug: "miedzymozgowie", title: "Międzymózgowie" },
  { slug: "pien-mozgu", title: "Pień mózgu" },
  { slug: "nerwy-czaszkowe", title: "Nerwy czaszkowe" },
  { slug: "mozdzek", title: "Móżdżek" },
  { slug: "komora-iv", title: "Komora IV" },
  { slug: "jadra-podstawy", title: "Jądra podstawy" },
  { slug: "uklad-pozapiramidowy", title: "Układ pozapiramidowy" },
  { slug: "istota-biala", title: "Istota biała" },
  { slug: "uklad-limbiczny", title: "Układ limbiczny" },
  { slug: "drogi-wstepujace-i-zstepujace", title: "Drogi wstępujące i zstępujące" },
  { slug: "uklad-nerwowy-autonomiczny", title: "Układ nerwowy autonomiczny" },
  { slug: "drogi-czucia", title: "Drogi czucia" },
  { slug: "drogi-rdzenia", title: "Drogi rdzenia" },
  { slug: "drogi-zmyslow", title: "Drogi zmysłów" },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
