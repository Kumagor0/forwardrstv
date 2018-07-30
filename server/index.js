const TelegramBot = require('node-telegram-bot-api');
const {
  TG_BOT_TOKEN,
  INPUT_CHAT_ID,
  OUTPUT_CHANNEL_ID,
  FORWARD_RSTV_LOGGING,
} = process.env;
const bot = new TelegramBot(TG_BOT_TOKEN, { polling: true });

bot.on('message', msg => {
  if (FORWARD_RSTV_LOGGING) {
    console.log(msg);
  }
  try {
    if (msg.chat.id == INPUT_CHAT_ID) {
      bot.forwardMessage(OUTPUT_CHANNEL_ID, INPUT_CHAT_ID, msg.message_id);
    }
  } catch (err) {
    console.log(err);
  }
});
