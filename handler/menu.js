module.exports = async (sock, msg) => {
    await sock.sendMessage(msg.key.remoteJid, {
        text: `
🤖 SAKURA BOT MENU

🧰 Utils:
!ping !menu !info

🎮 Fun:
!dado !piada

👥 Grupo:
!tagall !link

👑 Admin:
!kick !ban
`
    });
};
