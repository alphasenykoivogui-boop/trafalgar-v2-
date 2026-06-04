module.exports = {
name: "premium",

run: async (bot, chatId) => {

await bot.sendMessage(
chatId,
`📂 SYSTÈME UNBAN

Choisissez une page :`,
{
reply_markup: {
inline_keyboard: [
[
{ text: "📂 UNBAN 1", callback_data: "unban1" }
],
[
{ text: "📂 UNBAN 2", callback_data: "unban2" }
],
[
{ text: "📂 UNBAN 3", callback_data: "unban3" }
],
[
{ text: "⬅️ RETOUR", callback_data: "menu" }
]
]
}
}
);

}
};
