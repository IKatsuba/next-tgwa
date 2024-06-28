import { readFileSync, writeFileSync } from 'fs';

console.log('Setting ngrok URL in .env file...');

async function main() {
  console.log('Fetching ngrok URL...');

  const response = await fetch('http://localhost:4040/api/tunnels');
  const data = await response.json();
  const url = data.tunnels[0].public_url;

  console.log('Ngrok URL:', url);

  console.log('Updating .env file...');
  const envContent = readFileSync('.env', 'utf-8');

  const updatedEnvContent = envContent.includes('BOT_WEBHOOK_URL=')
    ? envContent.replace(
        /BOT_WEBHOOK_URL=.*/,
        `BOT_WEBHOOK_URL=${url}/api/tg/webhook`,
      )
    : envContent + `\nBOT_WEBHOOK_URL=${url}/api/tg/webhook`;

  writeFileSync('.env', updatedEnvContent);
  console.log('Done!');
}

main().catch(console.error);
