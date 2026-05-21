module.exports = async (sock, msg) => {
    await sock.sendMessage(msg.key.remoteJid, {
        text: `
🤖 MENU DO BOT

!ping → testar bot
!hi → saudação
!menu → ver comandos
`
    });
};
