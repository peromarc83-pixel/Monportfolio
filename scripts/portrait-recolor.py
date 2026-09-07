"""
Régénère le master du portrait « À propos » :
  - part du recadrage brut (retouchage IA, fond bleu/teal)
  - isole le sujet par remplissage depuis les bords (pixels bleutés)
  - redessine le fond aux tons du portfolio (quasi-noir + halo doré)
  - léger étalonnage chaud + vignettage

Source : assets/portrait/marc-source.png
Sortie : assets/portrait/marc.png  ->  puis `node scripts/optimize-portrait.mjs`

Usage : python scripts/portrait-recolor.py assets/portrait/marc.png
Dépendances : pip install pillow numpy
"""
import numpy as np
from PIL import Image, ImageFilter
from collections import deque
import sys

SRC = 'assets/portrait/marc-source.png'
OUT = sys.argv[1] if len(sys.argv) > 1 else 'assets/portrait/marc.png'

im = Image.open(SRC).convert('RGB')
a = np.array(im).astype(np.float32)
h, w, _ = a.shape
r, g, b = a[:, :, 0], a[:, :, 1], a[:, :, 2]

# --- fond d'origine : bleu/teal (canal bleu nettement au-dessus du rouge) ---
bluish = (b - r) >= 10
bg = np.zeros((h, w), bool)
dq = deque()
for x in range(w):
    for y in (0, h - 1):
        if bluish[y, x]:
            bg[y, x] = True; dq.append((y, x))
for y in range(h):
    for x in (0, w - 1):
        if bluish[y, x]:
            bg[y, x] = True; dq.append((y, x))
while dq:
    y, x = dq.popleft()
    for dy, dx in ((1, 0), (-1, 0), (0, 1), (0, -1)):
        ny, nx = y + dy, x + dx
        if 0 <= ny < h and 0 <= nx < w and not bg[ny, nx] and bluish[ny, nx]:
            bg[ny, nx] = True; dq.append((ny, nx))

subject = ~bg
alpha = Image.fromarray((subject * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(2.2))
alpha = (np.array(alpha).astype(np.float32) / 255.0)[:, :, None]

# --- nouveau fond : palette portfolio (quasi-noir + halo doré) ---
yy, xx = np.mgrid[0:h, 0:w].astype(np.float32)
d1 = np.sqrt(((xx - w * 0.12) / (w * 0.9)) ** 2 + ((yy - h * 0.04) / (h * 0.9)) ** 2)
d2 = np.sqrt(((xx - w * 0.92) / (w * 0.8)) ** 2 + ((yy - h * 0.10) / (h * 0.8)) ** 2)
glow = np.clip(1 - d1, 0, 1) ** 1.5 * 1.05 + np.clip(1 - d2, 0, 1) ** 1.7 * 0.6

base = np.array([9, 8, 10], np.float32)       # #09080a
gold = np.array([58, 49, 30], np.float32)     # charbon teinté or
newbg = base + glow[:, :, None] * (gold - base)
newbg += np.clip((a.mean(axis=2, keepdims=True) - 30) / 90, -0.4, 0.6) \
    * np.array([10, 9, 6], np.float32)
newbg = np.clip(newbg, 0, 255)

out = a * alpha + newbg * (1 - alpha)

# étalonnage chaud léger -> le portrait vit dans la palette or
out = out * np.array([1.035, 1.0, 0.955], np.float32)

# vignettage doux (profondeur type carte)
dv = np.sqrt(((xx - w / 2) / (w / 2)) ** 2 + ((yy - h / 2) / (h / 2)) ** 2)
out = out * (1 - np.clip((dv - 0.85) / 0.7, 0, 1) * 0.22)[:, :, None]

Image.fromarray(np.clip(out, 0, 255).astype(np.uint8)).save(OUT)
print('saved', OUT, (w, h))
