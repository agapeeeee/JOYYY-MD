const { Sequelize } = require("sequelize");
const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

const toBool = (x) => x == "true";

DATABASE_URL = process.env.DATABASE_URL || "./lib/database.db";


module.exports = {
  //For Enabling Commands Like AUTO_STATUS_RED Type true For Disenabling Type false
  ANTILINK: toBool(process.env.ANTI_LINK) || true,
  //_________________________________________________________________________________________________________________________________
  LOGS: toBool(process.env.LOGS) || true,
  //_________________________________________________________________________________________________________________________________
  ANTILINK_ACTION: process.env.ANTI_LINK || "kick",
  //_________________________________________________________________________________________________________________________________
  AUTO_REACT: process.env.AUTO_REACT || 'false',
  //_________________________________________________________________________________________________________________________________
  AUDIO_DATA: process.env.AUDIO_DATA || "Phoenix-MD;Abhishek Suresh;https://graph.org/file/8976892f2f615077b48cd.jpg",
  //_________________________________________________________________________________________________________________________________
  AUTO_STATUS_READ: process.env.AUTO_STATUS_READ || 'false',
  //_________________________________________________________________________________________________________________________________
  SESSION_ID: process.env.SESSION_ID || "SUHAIL_12_53_04_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTAzLFxuICAgICAgICA4NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA3LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2NyxcbiAgICAgICAgNTksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMixcbiAgICAgICAgNjMsXG4gICAgICAgIDk0LFxuICAgICAgICA0OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjIxLFxuICAgICAgICA5LFxuICAgICAgICA0MixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2NixcbiAgICAgICAgNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODYsXG4gICAgICAgIDkxLFxuICAgICAgICAxMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDc0LFxuICAgICAgICA3NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODYsXG4gICAgICAgIDIxLFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgX", //Enter Your Session Id Here
  //_________________________________________________________________________________________________________________________________
  SUDO: process.env.SUDO || "+233544498988",
  //_________________________________________________________________________________________________________________________________
  SPAM_COUNT: process.env.SPAM_COUNT || "10",
  //_________________________________________________________________________________________________________________________________
  LANG: process.env.LANG || "EN",
  //_________________________________________________________________________________________________________________________________
  HANDLERS: process.env.HANDLER === "false" || '^[.]',
  //_________________________________________________________________________________________________________________________________
  RMBG_KEY: process.env.RMBG_KEY || false,
  //_________________________________________________________________________________________________________________________________
  BRANCH: "main",
  //_________________________________________________________________________________________________________________________________
  STICKER_DATA: "🎯𝙿𝚑𝚘𝚎𝚗𝚒𝚡-𝙼𝙳;𝙰𝚋𝚑𝚒𝚜𝚑𝚎𝚔 𝚂𝚞𝚛𝚎𝚜𝚑☘️",
  //_________________________________________________________________________________________________________________________________
  WELCOME_MSG: process.env.WELCOME_MSG || "👋 Hello *@user* Welcome To Our Group *@gname*\n*Total Members:* @count\n*Group Description:*\n@gdesc {pp}",
  //_________________________________________________________________________________________________________________________________
  GOODBYE_MSG: process.env.GOODBYE_MSG || "👋 GoodBye *@user* From *@gname*\n*Total Members:* @count {pp}",
  //_________________________________________________________________________________________________________________________________
  DATABASE_URL: DATABASE_URL,
  //_________________________________________________________________________________________________________________________________
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || " ",
  //_________________________________________________________________________________________________________________________________
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || " ",
  //_________________________________________________________________________________________________________________________________
  OWNER_NAME: process.env.OWNER_NAME || "JOYYYYY",
  //_________________________________________________________________________________________________________________________________
  OWNER_NUMBER: process.env.OWNER_NUMBER || "918157993101",
  //_________________________________________________________________________________________________________________________________
  BOT_NAME: process.env.BOT_NAME || "JOY-MD",
  //_________________________________________________________________________________________________________________________________
  WORK_TYPE: process.env.WORK_TYPE || "private",
  //_________________________________________________________________________________________________________________________________
  MENTION_DATA: "Phoenix-MD;919074692450;https://graph.org/file/63942461d4b8d78b360d3.jpg;https://graph.org/file/bb3ac71ec991cef3d5216.mp4",
  //_________________________________________________________________________________________________________________________________
  BASE_URL: "https://abhi-api-bvws.onrender.com/",
  //_________________________________________________________________________________________________________________________________
  //Database
  DATABASE:
    DATABASE_URL === "./lib/database.db"
      ? new Sequelize({
          dialect: "sqlite",
          storage: DATABASE_URL,
          logging: false,
        })
      : new Sequelize(DATABASE_URL, {
          dialect: "postgres",
          ssl: true,
          protocol: "postgres",
          dialectOptions: {
            native: true,
            ssl: { require: true, rejectUnauthorized: false },
          },
          logging: false,
        }),
};
