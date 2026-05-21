const fs = require("fs");
const path = require("path");
const config = require("../config");

async function handleMessage(sock, msg) {
    const text =
        msg.message?.conversation ||
        msg.message?.extendedTextMessage?.text;

    if (!text) return;

    if (!text.startsWith(config.prefix)) return;

    const args = text.slice(config.prefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();

    const commandPath = path.join(__dirname, "../commands", `${command}.js`);

    if (fs.existsSync(commandPath)) {
        const cmd = require(commandPath);
        return cmd(sock, msg, args);
    }

    await sock.sendMessage(msg.key.remoteJid, {
        text: "❌ comando não encontrado"
    });
}

module.exports = { handleMessage };
