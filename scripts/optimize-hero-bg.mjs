/**
 * Convertit la photo de fond du Hero « constellation » en WebP.
 *
 * Source (non publiée) : assets/hero-bg/circuit.jpg
 * Sorties               : public/images/hero-circuit.webp (1920px)
 *                         public/images/hero-circuit-1280.webp (1280px, mobile)
 *
 * Usage : node scripts/optimize-hero-bg.mjs
 */
import { stat } from "node:fs/promises";
import sharp from "sharp";

const SRC = "assets/hero-bg/circuit.jpg";
const OUT = "public/images/hero-circuit.webp";
const OUT_SMALL = "public/images/hero-circuit-1280.webp";

for (const [out, width] of [[OUT, 1920], [OUT_SMALL, 1280]]) {
  await sharp(SRC)
    .resize({ width })
    .webp({ quality: 68 })
    .toFile(out);

  const { size } = await stat(out);
  console.log(`✓ ${out} (largeur ${width}px, ${Math.round(size / 1024)} Ko)`);
}
