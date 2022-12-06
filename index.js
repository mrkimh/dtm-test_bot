const TOKEN = `658194942:AAFhRG_DQHxypOzqizPpNIHkZ5E4tWZPVEY`

const TelegramBot = require('node-telegram-bot-api');
const Controllers = require('./controllers.js')

const bot = new TelegramBot(TOKEN, { polling: true });

bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('text', (message) => (Controllers.MessageController(message, bot)))
