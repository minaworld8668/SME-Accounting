import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(__dirname, '..', 'public', 'images', 'logo.jpg');
const OUT = path.join(__dirname, '..', 'public', 'images', 'logo.png');
const OUT_LIGHT = path.join(__dirname, '..', 'public', 'images', 'logo-light.png');

const img = sharp(SRC).ensureAlpha();
const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;

// White-key: make near-white pixels transparent, feather the edges.
const HARD = 244; // >= => fully transparent
const SOFT = 205; // <= => fully opaque; between => feathered
for (let i = 0; i < data.length; i += channels) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);
  const sat = max - min; // low saturation = grayscale/white
  if (sat < 26) {
    // grayscale-ish pixel -> candidate for background removal
    const lum = (r + g + b) / 3;
    if (lum >= HARD) {
      data[i + 3] = 0;
    } else if (lum > SOFT) {
      const t = (lum - SOFT) / (HARD - SOFT); // 0..1
      data[i + 3] = Math.round(255 * (1 - t));
    }
  }
}

await sharp(Buffer.from(data), { raw: { width, height, channels } })
  .png()
  .trim({ threshold: 10 }) // crop the now-transparent border tight
  .toFile(OUT);

// Light variant: recolor dark "SME" letters -> white, keep the green arrow.
// (for use on dark backgrounds: navbar over hero, footer)
const light = Buffer.from(data);
for (let i = 0; i < light.length; i += channels) {
  if (light[i + 3] === 0) continue; // transparent -> skip
  const r = light[i];
  const g = light[i + 1];
  const b = light[i + 2];
  const isGreen = g > r + 14 && g > b + 14; // brand green arrow
  if (!isGreen) {
    light[i] = 255;
    light[i + 1] = 255;
    light[i + 2] = 255;
  }
}

await sharp(light, { raw: { width, height, channels } })
  .png()
  .trim({ threshold: 10 })
  .toFile(OUT_LIGHT);

console.log('Wrote', OUT, 'and', OUT_LIGHT);
