import { Bot } from 'grammy';
import telegramifyMarkdown from 'telegramify-markdown';

export const bot = new Bot(process.env.BOT_TOKEN!);

bot.command('start', async (ctx) => {
  await ctx.reply(
    telegramifyMarkdown(`Hello! 👋

I'm NextJS Telegram Bot!

Here's what I can do for you:
- ...

To get started:
1. ...
2. ...
3. ...

If you have suggestions or questions, I'm always happy to hear your feedback. Let's get started! 🚀`),
    {
      parse_mode: 'MarkdownV2',
    },
  );
});
