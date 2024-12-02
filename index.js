require("colors");
const Bot = require("./src/Bot");
const Config = require("./src/Config");
const { Header } = require("./src/Header");

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

function startHourlyProcess() {
  async function restartProcess() {
    await main().catch((error) => console.error(error));
    console.log("\nProcess finished. Restarting in 3 hour...\n");

    setTimeout(() => {
      restartProcess();
    }, 1000 * 60 * 60 * 12);
  }

  restartProcess();
}

startHourlyProcess();
