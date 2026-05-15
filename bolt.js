'use strict';
const bolt = require('@slack/bolt');

const app = new bolt.App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
  logLevel: 'debug'
});

app.message(/hello/i, ({message, say}) => {
  say(`こんにちは！ <@${message.user}>さん`);
});

const lots = ["大吉", "吉", "中吉", "末吉", "凶"];

app.message(/おみくじ/i, ({ message, say }) => {
  const lot = lots[Math.floor(Math.random() * lots.length)];
  say(`${lot}, <@${message.user}>さん`);
});

app.start();
