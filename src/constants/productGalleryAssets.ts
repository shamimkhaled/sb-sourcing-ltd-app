/**
 * Local product gallery images under src/assets/img/products/.
 * Sorted: men → women → kids, then by path (filename) within each segment.
 */

interface GalleryProduct {
  id: number;
  title: string;
  image: string;
}

function segmentOrder(path: string): number {
  if (path.includes(' men/')) return 0;
  if (path.includes(' women/')) return 1;
  if (path.includes(' kids/')) return 2;
  return 99;
}

function titleFromPath(filePath: string): string {
  const normalized = filePath.replace(/\\/g, '/');
  const segments = normalized.split('/');
  const fileName = segments.pop()?.replace(/\.[^.]+$/u, '') ?? 'Product';
  const folder = segments[segments.length - 1]?.toLowerCase() ?? '';

  let prefix = '';
  if (folder.includes('kids')) prefix = 'Kids ';
  else if (folder.includes('women')) prefix = "Women's ";
  else if (folder.includes('men')) prefix = "Men's ";

  return `${prefix}${fileName}`;
}

function modulesToProducts(modules: Record<string, string>): GalleryProduct[] {
  const entries = Object.entries(modules).map(([path, url]) => ({ path, url }));

  entries.sort((a, b) => {
    const oa = segmentOrder(a.path);
    const ob = segmentOrder(b.path);
    if (oa !== ob) return oa - ob;
    return a.path.localeCompare(b.path);
  });

  return entries.map((e, i) => ({
    id: i + 1,
    title: titleFromPath(e.path),
    image: e.url,
  }));
}

const knitModules = import.meta.glob('../assets/img/products/knit/**/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const wovenModules = import.meta.glob('../assets/img/products/woven/**/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const sweaterModules = import.meta.glob('../assets/img/products/sweater/**/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const othersModules = import.meta.glob('../assets/img/products/others/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

export const knitGalleryProducts = modulesToProducts(knitModules);
export const wovenGalleryProducts = modulesToProducts(wovenModules);
export const sweaterGalleryProducts = modulesToProducts(sweaterModules);
export const othersGalleryProducts = modulesToProducts(othersModules);
