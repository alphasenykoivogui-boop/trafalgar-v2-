const TelegramBot = require("node-telegram-bot-api");
const fs = require("fs");

const menu = require("./commands/menu");
const owner = require("./commands/owner");
const site = require("./commands/site");
const premium = require("./commands/premium");

const TOKEN = "8721224684:AAHessSC-Z_Cqh90omGyphZyni4VEizhGYc";

const bot = new TelegramBot(TOKEN, {
    polling: true
});

bot.onText(/\/start/, async (msg) => {

const chatId = msg.chat.id;

await bot.sendPhoto(
chatId,
"./assets/banner.jpg",
{
caption:
`👑 TRAFALGAR V2

⚡ PREMIUM SYSTEM

📢 @trafalgar2010dev
🌐 dev-trafalgar-d-law.netlify.app`
}
);

menu.run(bot, chatId);

});

bot.on("callback_query", async (query) => {

const chatId = query.message.chat.id;

if(query.data === "owner") {
return owner.run(bot, chatId);
}

if(query.data === "site") {
return site.run(bot, chatId);
}

if(query.data === "premium") {
return premium.run(bot, chatId);
}

if(query.data === "unban1") {

let text = fs.readFileSync("./unban1.txt","utf8");

return bot.sendMessage(chatId, text);
}

if(query.data === "unban2") {

let text = fs.readFileSync("./unban2.txt","utf8");

return bot.sendMessage(chatId, text);
}

if(query.data === "unban3") {

let text = fs.readFileSync("./unban3.txt","utf8");

return bot.sendMessage(chatId, text);
}

if(query.data === "menu") {
return menu.run(bot, chatId);
}

});