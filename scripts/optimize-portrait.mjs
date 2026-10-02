/**
 * Convertit le portrait de la section « À propos » en WebP.
 *
 * Source (non publiée) : assets/portrait/marc.png
 *   (recadrage du retouchage IA + fond redessiné aux tons du portfolio —
 *    voir scripts/portrait-recolor.py pour la génération de ce master)
 * Sortie                : public/images/marc-portrait.webp
 *
 * Usage : node scripts/optimize-portrait.mjs
 */
import { stat } from "node:fs/promises";
import sharp from "sharp";

const SRC = "assets/portrait/marc-chemise.png";
const VARIANTS = [
  { width: 600, out: "public/images/marc-portrait.webp" },
  { width: 400, out: "public/images/marc-portrait-400.webp" },
  { width: 240, out: "public/images/marc-portrait-240.webp" },
];

for (const { width, out } of VARIANTS) {
  await sharp(SRC).resize({ width }).webp({ quality: 82 }).toFile(out);
  const { size } = await stat(out);
  console.log(`✓ ${out} (largeur ${width}px, ${Math.round(size / 1024)} Ko)`);
}
