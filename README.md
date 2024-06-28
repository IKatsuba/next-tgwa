# Nextjs Telegram Bot

This is a simple Telegram bot that uses Nextjs to serve the bot's webhook. It
can be hosted on Vercel or any other serverless platform that supports Node.js.

## Usage

1. Run docker-compose:

```bash
docker-compose up -d
```

2. Clone the repository:

```bash
git clone
```

3. Install the dependencies:

```bash
npm install
```

4. Copy `.env.example` to `.env` and fill in the
   [required values](#required-environment-variables):

```bash
cp .env.example .env
```

5. Start the development server:

```bash
npm start
```

## Required Environment Variables

- `BOT_TOKEN`: The token of your Telegram bot. You can get it by talking to
  [BotFather](https://t.me/botfather).
- `NGROK_AUTHTOKEN`: The authtoken of your ngrok account. You can get it
  [here](https://dashboard.ngrok.com/get-started/setup).

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE)
file for details.
