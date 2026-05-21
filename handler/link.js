module.exports = async (sock, msg) => {
    const code = await sock.groupInviteCode(msg.key.remoteJid);

    await sock.sendMessage(msg.key.remoteJid, {
        text: `🔗 https://chat.whatsapp.com/${code}`
    });
};
