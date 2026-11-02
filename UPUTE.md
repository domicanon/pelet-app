# Pelet dnevnik: postavljanje (jednom, ~15 min)

## 1. GitHub (može i u Safariju na iPhoneu)
1. Prijavi se na github.com.
2. **New repository** → ime `pelet-data` → **Private** → kvačica *Add a README file* → Create.
3. **New repository** → ime `pelet-app` → **Public** → kvačica *Add a README file* → Create.
   U njemu: **Add file → Upload files** → ubaci SVE datoteke iz ove mape osim UPUTE.md → *Commit changes*.
4. `pelet-app` → **Settings → Pages** → Source: *Deploy from a branch* → Branch: `main`, mapa `/ (root)` → Save.
   Za 1–2 minute aplikacija je na: `https://TVOJE-IME.github.io/pelet-app/`
5. Token: slika profila → **Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token**
   - Name: `Pelet mobitel`
   - Expiration: **No expiration**
   - Repository access: **Only select repositories** → `pelet-data`
   - Permissions → Repository permissions → **Contents: Read and write**
   - Generate → kopiraj token i **spremi ga u aplikaciju Lozinke** na iPhoneu (to je jedino što ćeš ikad trebati ponovno).

## 2. Prebacivanje podataka iz Claude verzije
6. Otvori Pelet dnevnik u Claudeu → **Peć → Izvezi kopiju (.json)** → spremi u Datoteke.

## 3. iPhone
7. Safari → `https://TVOJE-IME.github.io/pelet-app/` → **Dijeli → Dodaj na početni zaslon**.
8. Otvori **Pelet s početnog zaslona** (uvijek odatle, ne iz Safarija: imaju odvojenu memoriju).
9. **Peć → GitHub spremanje** → korisničko ime, `pelet-data`, token → **Spoji i provjeri**.
10. **Peć → Uvezi kopiju** → odaberi .json iz koraka 6 → Uvezi.
11. Lampica gore postane zelena: *Sve je na GitHubu*. U repou `pelet-data` vidiš `data.json` i commit.

## Lampica
- Zeleno *Sve je na GitHubu*: sve je na sigurnom.
- Narančasto *N izmjena čeka*: spremljeno na mobitel, šalje se čim ima interneta (dok je aplikacija otvorena ili kad je sljedeći put otvoriš). Takva punjenja imaju oznaku *na mobitelu*.
- Crveno: problem s tokenom ili repoom. Piše što i gdje.

## Ako se ikad obriše mobitel ili ikona
Ponovi korake 7–9 s tokenom iz Lozinki. Sve se samo povuče s GitHuba.
