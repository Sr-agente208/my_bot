const fs = require("fs");

async function handleMessage(sock, msg) {
    const text =
        msg.message.conversation ||
        msg.message.extendedTextMessage?.text;

    if (!text) return;

    const prefix = "!";
    if (!text.startsWith(prefix)) return;

    const args = text.slice(1).trim().split(" ");
    const command = args.shift().toLowerCase();

    const commandFile = `../commands/${command}.js`;

    if (fs.existsSync(commandFile)) {
        const cmd = require(commandFile);
        await cmd(sock, msg, args);
    } else {
        await sock.sendMessage(msg.key.remoteJid, {
            text: "❌ comando não existe"
        });
    }
}

module.exports = { handleMessage };
