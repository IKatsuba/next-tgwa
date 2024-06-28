import { TOKEN_HEADER } from './consts';

export function validateWebhook(handler: (req: Request) => Promise<Response>) {
  return (req: Request) => {
    if (!process.env.BOT_WEBHOOK_SECRET) {
      return handler(req);
    } else {
      const token = req.headers.get(TOKEN_HEADER);
      if (process.env.BOT_WEBHOOK_SECRET === token) {
        return handler(req);
      } else {
        console.log(
          'Secret token does not match:',
          token,
          process.env.BOT_WEBHOOK_SECRET,
        );
      }
    }

    return new Response('Unauthorized', { status: 401 });
  };
}
