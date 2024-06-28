import { bot, validateWebhook } from '@nextjs-telegram/telegram/server';

export const maxDuration = 60;

export async function GET() {
  return new Response('Ok');
}

export const POST = validateWebhook(async (request: Request) => {
  const body = await request.json();

  await bot.init();

  await bot.handleUpdate(body);

  return new Response('Ok');
});
