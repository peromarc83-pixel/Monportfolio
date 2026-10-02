/**
 * Convertit les captures de projets en WebP, toutes recadrées au même format
 * (mêmes dimensions de sortie => les 3 cards ont exactement la même taille).
 *
 * Sources (non publiées) : assets/project-shots/<nom>.(png|jpg)
 * Sortie                  : public/images/<nom>.webp
 *
 * Usage : node scripts/optimize-images.mjs
 */
import { readdir, stat } from "node:fs/promises";
import { join, parse } from "node:path";
import sharp from "sharp";

const SRC_DIR = "assets/project-shots";
const OUT_DIR = "public/images";
const VARIANTS = [
  { width: 1600, height: 667, quality: 82, suffix: "" },
  { width: 1200, height: 500, quality: 80, suffix: "-1200" },
  { width: 800, height: 333, quality: 75, suffix: "-800" },
  { width: 400, height: 167, quality: 75, suffix: "-400" },
];

const files = await readdir(SRC_DIR);
const sources = files.filter((f) => /\.(png|jpe?g)$/i.test(f));

if (sources.length === 0) {
  console.warn(`! aucune source dans ${SRC_DIR}`);
}

for (const file of sources) {
  const name = parse(file).name;

  for (const { width, height, quality, suffix } of VARIANTS) {
    const out = join(OUT_DIR, `${name}${suffix}.webp`);
    await sharp(join(SRC_DIR, file))
      .resize({ width, height, fit: "cover", position: "top" })
      .webp({ quality })
      .toFile(out);

    const { size } = await stat(out);
    console.log(`✓ ${out}  (${width}x${height}, ${Math.round(size / 1024)} Ko)`);
  }
}
