const mineflayer = require('mineflayer');

function startBot() {
  const bot = mineflayer.createBot({
    host: "GTStealCraft.aternos.me",  // replace with your actual Aternos server address
    port: 22898,
    username: "AFK_Bot",          // any fake cracked player name
    version: false                // auto-detect Minecraft version
  });

  bot.on("login", () => {
    console.log("✅ Bot joined the server!");
  });

  bot.on("end", () => {
    console.log("❌ Bot disconnected. Reconnecting in 10 seconds...");
    setTimeout(startBot, 10000); // ⏱️ Wait 10 seconds before retry
  });

  bot.on("error", (err) => {
    console.log("⚠️ Bot error:", err.message);
  });
}

startBot();
