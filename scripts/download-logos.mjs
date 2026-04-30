import { createWriteStream, mkdirSync } from "fs";
import { pipeline } from "stream/promises";
import https from "https";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "../public/images/logos");
mkdirSync(OUT_DIR, { recursive: true });

const logos = [
  { name: "edf",              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/EDF_logo.svg/320px-EDF_logo.svg.png" },
  { name: "credit-mutuel",    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Logo_Cr%C3%A9dit_Mutuel.svg/320px-Logo_Cr%C3%A9dit_Mutuel.svg.png" },
  { name: "coca-cola",        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/320px-Coca-Cola_logo.svg.png" },
  { name: "bnp-paribas",      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/BNP_Paribas_logo.svg/320px-BNP_Paribas_logo.svg.png" },
  { name: "loreal",           url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Logo_L%27Or%C3%A9al.svg/320px-Logo_L%27Or%C3%A9al.svg.png" },
  { name: "volvo",            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Volvo_Cars_logo.svg/320px-Volvo_Cars_logo.svg.png" },
  { name: "lvmh",             url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Logo_LVMH.svg/320px-Logo_LVMH.svg.png" },
  { name: "sanofi",           url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Sanofi_logo.svg/320px-Sanofi_logo.svg.png" },
  { name: "axa",              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/AXA_Logo.svg/320px-AXA_Logo.svg.png" },
  { name: "bouygues",         url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Bouygues-logo.svg/320px-Bouygues-logo.svg.png" },
  { name: "eiffage",          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Eiffage_logo.svg/320px-Eiffage_logo.svg.png" },
  { name: "vinci",            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/VINCI_logo.svg/320px-VINCI_logo.svg.png" },
  { name: "engie",            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Logo_ENGIE.svg/320px-Logo_ENGIE.svg.png" },
  { name: "totalenergies",    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/TotalEnergies_logo.svg/320px-TotalEnergies_logo.svg.png" },
  { name: "societe-generale", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Soci%C3%A9t%C3%A9_G%C3%A9n%C3%A9rale_logo.svg/320px-Soci%C3%A9t%C3%A9_G%C3%A9n%C3%A9rale_logo.svg.png" },
  { name: "sncf",             url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Logo_SNCF.svg/320px-Logo_SNCF.svg.png" },
  { name: "renault",          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Renault_2021_Text.svg/320px-Renault_2021_Text.svg.png" },
  { name: "danone",           url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Danone.svg/320px-Danone.svg.png" },
  { name: "manomano",         url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/ManoMano_logo.svg/320px-ManoMano_logo.svg.png" },
  { name: "veolia",           url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Logo_veolia.svg/320px-Logo_veolia.svg.png" },
  { name: "thales",           url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Thales_Logo.svg/320px-Thales_Logo.svg.png" },
  { name: "capgemini",        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Capgemini_201x_logo.svg/320px-Capgemini_201x_logo.svg.png" },
  { name: "air-france",       url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Air_France_Logo.svg/320px-Air_France_Logo.svg.png" },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = createWriteStream(dest);
    https.get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        download(res.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        file.close();
        reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        return;
      }
      res.pipe(file);
      file.on("finish", () => file.close(resolve));
    }).on("error", reject);
  });
}

console.log(`\n📥 Téléchargement des ${logos.length} logos...\n`);

let ok = 0, fail = 0;
for (const { name, url } of logos) {
  const dest = path.join(OUT_DIR, `${name}.png`);
  try {
    await download(url, dest);
    console.log(`  ✅ ${name}`);
    ok++;
  } catch (err) {
    console.log(`  ❌ ${name} — ${err.message}`);
    fail++;
  }
}

console.log(`\n✨ Terminé : ${ok} OK, ${fail} échec(s)`);
console.log(`📁 Logos dans : public/images/logos/\n`);
