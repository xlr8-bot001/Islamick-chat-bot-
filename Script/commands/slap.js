var mysterious = "Siegfried Sama";
const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "slap",
  version: "3.0.0",
  hasPermssion: 0,
  credits: `${mysterious}`,
  description: "boy to girl slap",
  commandCategory: "...",
  usages: "[tag]",
  cooldowns: 5,
};

module.exports.run = async({ api, event, Threads, global }) => {
  var link = [ "https://i.postimg.cc/FRkmyJGg/received-100089438197003.gif", "https://i.postimg.cc/BndjPDTs/received-100092166793458.gif" , "https://i.postimg.cc/bw65rCzc/received-100089438197003.gif" , "https://i.postimg.cc/Xq88hqqS/received-100089438197003.gif" , "https://i.postimg.cc/0yGwsnCJ/received-100092166793458.gif" ];
   var mention = Object.keys(event.mentions);
     let tag = event.mentions[mention].replace("@", "");
    if (!mention) return api.sendMessage("Mention 1 person that you want to slap", threadID, messageID);
   var callback = () => api.sendMessage({body:`╭──────•◈•───────╮\n         𝗫𝗟𝗥𝟖  𝗖𝗛𝗔𝗧 - 𝗕𝗢𝗧       \n\n_থাপ্পর👋 খা হালার পুত_😛👉 ${tag}` + `\n\nসরি, আমার ভুল হয়েছে মাফ করে দিন_🙁😸\n\n  BOT OWNER JOWEL ッ\n╰──────•◈•───────╯`,mentions: [{tag: tag,id: Object.keys(event.mentions)[0]}],attachment: fs.createReadStream(__dirname + "/cache/slp.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/slp.gif"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/slp.gif")).on("close",() => callback());
              }
