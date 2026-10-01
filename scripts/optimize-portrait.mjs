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

const SRC = "assets/portrait/marc-mat.png";
const OUT = "public/images/marc-portrait.webp";
const TARGET_WIDTH = 600;

await sharp(SRC)
  .resize({ width: TARGET_WIDTH })
  .webp({ quality: 82 })
  .toFile(OUT);

const { size } = await stat(OUT);
console.log(`✓ ${OUT} (largeur ${TARGET_WIDTH}px, ${Math.round(size / 1024)} Ko)`);
