module.exports = async (sock, msg) => {
    const metadata = await sock.groupMetadata(msg.key.remoteJid);

    let text = "📢 TODOS:\n\n";

    const mentions = metadata.participants.map(p => p.id);

    metadata.participants.forEach(p => {
        text += `@${p.id.split("@")[0]}\n`;
    });

    await sock.sendMessage(msg.key.remoteJid, {
        text,
        mentions
    });
};
