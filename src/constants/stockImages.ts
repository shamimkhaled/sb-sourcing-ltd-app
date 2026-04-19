/**
 * Royalty-free stock imagery for apparel sourcing & manufacturing.
 * Pexels: https://www.pexels.com/license/ — Unsplash: https://unsplash.com/license
 */

export function pexelsPhoto(id: number, width: number) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;
}

export function unsplashPhoto(photoId: string, width: number) {
  return `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=${width}&q=80`;
}

/** Wide hero / page banner backgrounds */
export const banners = {
  apparelRetail: unsplashPhoto('1441986300917-64674bd600d8', 1920),
  sewingFloor: unsplashPhoto('1582735689369-4fe89db7114c', 1920),
  tailoring: pexelsPhoto(7671169, 1920),
  workshop: pexelsPhoto(7213441, 1920),
  fabricRack: pexelsPhoto(5698859, 1920),
  knitwearDisplay: pexelsPhoto(5698857, 1920),
  fashionStudio: pexelsPhoto(5675404, 1920),
  logisticsApparel: pexelsPhoto(3738088, 1920),
  textileFlatlay: pexelsPhoto(298863, 1920),
  productionOverview: pexelsPhoto(5632402, 1920),
  garmentRows: pexelsPhoto(276517, 1920),
} as const;

/** Client testimonial avatars (professional portraits, Unsplash) */
export const testimonialPortraits = {
  a: unsplashPhoto('1519085360753-af0119f7cbe7', 200),
  b: unsplashPhoto('1500648767791-00dcc994a43e', 200),
  c: unsplashPhoto('1573496359142-b8d87734a5a2', 200),
} as const;

/** Product gallery / category showcase — coordinated apparel shots (Pexels) */
export const productShowcaseIds = {
  knitMens: [6626869, 6626870, 6626872, 6626878, 6626881, 6626883, 6626884, 6626886],
  knitWomens: [6626887, 6626888, 6626890, 6626891],
  knitKids: [6626892, 6626893],
  wovenMens: [6626894, 6626895],
  wovenWomens: [6626896, 6626897],
  wovenKids: [6626898],
  sweaterMens: [6626900],
  sweaterWomens: [6626901],
  sweaterKids: [6626902],
} as const;
