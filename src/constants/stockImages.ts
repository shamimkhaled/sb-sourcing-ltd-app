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

export function unsplashDownloadPhoto(shortId: string, width: number) {
  return `https://unsplash.com/photos/${shortId}/download?force=true&w=${width}`;
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

/** Product gallery / category showcase — shirt/blouse/sleepwear style product imagery */
export const productCategoryImages = {
  knitMens: [
    unsplashDownloadPhoto('hMMXhKSZk7k', 900),
    unsplashDownloadPhoto('N0ke5zChVBU', 900),
    unsplashDownloadPhoto('vcTKFYNZop4', 900),
    unsplashDownloadPhoto('Iawbgbj7jmU', 900),
    unsplashDownloadPhoto('xbFtknoQG_Y', 900),
    unsplashDownloadPhoto('tyv3bhizAx8', 900),
    unsplashDownloadPhoto('7jQrdTP2eu4', 900),
    unsplashDownloadPhoto('2UTk-Nip5aM', 900),
  ],
  knitWomens: [
    unsplashDownloadPhoto('gbq6pdUX6EY', 900),
    unsplashDownloadPhoto('ssE2sYVt-xs', 900),
    unsplashDownloadPhoto('H0-Cn6I2FSg', 900),
    unsplashDownloadPhoto('Hm2UqlVTBnc', 900),
  ],
  knitKids: [
    unsplashDownloadPhoto('A3MleA0jtoE', 900),
    unsplashDownloadPhoto('xXJ6utyoSw0', 900),
  ],
  wovenMens: [
    unsplashDownloadPhoto('hMMXhKSZk7k', 900),
    unsplashDownloadPhoto('dlxLGIy-2VU', 900),
  ],
  wovenWomens: [
    unsplashDownloadPhoto('QoqkhOrfpVU', 900),
    unsplashDownloadPhoto('OYYE4g-I5ZQ', 900),
  ],
  wovenKids: [unsplashDownloadPhoto('A3MleA0jtoE', 900)],
  sweaterMens: [unsplashDownloadPhoto('HKAZ-k4h2NE', 900)],
  sweaterWomens: [unsplashDownloadPhoto('AqcgORY1aiM', 900)],
  sweaterKids: [unsplashDownloadPhoto('TYXCnTHDqHk', 900)],
} as const;
