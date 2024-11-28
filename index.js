require("colors");
const fs = require("fs");
const Bot = require("./src/Bot");
const Config = require("./src/Config");
const { Header } = require("./src/Header");

async function bacaBaris(namaFile) {
  try {
    const data = await fs.promises.readFile(namaFile, "utf-8");
    console.log(`Berhasil memuat data dari ${namaFile}`.green);
    return data.split("\n").filter(Boolean); // Menghapus baris kosong
  } catch (error) {
    console.error(`Gagal membaca ${namaFile}: ${error.message}`.red);
    return [];
  }
}

const tunda = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
  process.stdout.write("\x1Bc");
  Header();
  console.log("Harap tunggu...\n".yellow);

  await tunda(1000);

  const konfigurasi = new Config();
  const bot = new Bot(konfigurasi);

  const daftarIDPengguna = ["2pTBDvkYXM88NNLbqdxEZrNUMJx"];

  if (daftarIDPengguna.length === 0) {
    console.error("Tidak ada ID pengguna ditemukan di uid.txt. Keluar...".red);
    return;
  }

  console.log(`Berhasil memuat ${daftarIDPengguna.length} ID pengguna\n`.green);
  await Promise.all(
    daftarIDPengguna.map((idPengguna) => bot.connectDirectly(idPengguna))
  );
}

main().catch((error) => console.error(error));
