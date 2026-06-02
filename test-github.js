// Codice di test per il tuo bot caricato da GitHub
const tRegRaw = mek.message?.conversation || mek.message?.extendedTextMessage?.text || "";
const tReg = tRegRaw.toLowerCase().trim();

if (tReg.startsWith(".testgh")) {
    await QasimDev.sendMessage(mek.key.remoteJid, { text: "🚀 Grandioso! Il codice scaricato da GitHub funziona alla perfezione!" }, { quoted: mek });
    return;
}
