const { default: makeWASocket, useMultiFileAuthState } = require("@whiskeysockets/baileys");
const pino = require("pino");
const { handleMessage } = require("./handler/commandHandler");

async function startBot() {
    const { state, saveCreds } = await useMultiFileAuthState("auth");

    const sock = makeWASocket({
        auth: state,
        printQRInTerminal: true,
        logger: pino({ level: "silent" })
    });

    sock.ev.on("creds.update", saveCreds);

    sock.ev.on("messages.upsert", async ({ messages }) => {
        const msg = messages[0];

        if (!msg.message) return;

        await handleMessage(sock, msg);
    });

    console.log("🤖 Bot rodando...");
}

startBot();
