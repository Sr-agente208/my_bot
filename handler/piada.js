module.exports = async (sock, msg) => {
    const jokes = ["JS sem bug é mito", "console.log da vida real", "if (vida) return café"];
    const j = jokes[Math.floor(Math.random() * jokes.length)];

    await sock.sendMessage(msg.key.remoteJid, { text: j });
};
