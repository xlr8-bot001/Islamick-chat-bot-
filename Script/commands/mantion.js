module.exports.config = {
  name: "goiadmin",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "JOWEL XHOWDHURY",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100089438197003","100092166793458","100089438197003","100092166793458") {
    var aid = ["100092166793458","100089438197003","100092166793458","100089438197003"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["আমার 𝗕𝗢𝗦𝗦 𝗝𝗢𝗪𝗘𝗟 কে এতো ডাকো কেন😒, ভালো টালো বাসো নাকি🤭", "আমর 𝗕𝗢𝗦𝗦 𝗝𝗢𝗪𝗘𝗟 কে আর একবার মেনশন দিলে তোমার নাকের মধ্যে ঘুষি মারমু😡", " 𝗕𝗢𝗦𝗦 𝗝𝗢𝗪𝗘𝗟 কাজে ব্যস্ত আছে যা বলার আমাকে বলো🫣", "𝗕𝗢𝗦𝗦 𝗝𝗢𝗪𝗘𝗟 কে এত মেনশন না দিয়ে পারলে একটা একটা গার্লফ্রেন্ড দে","Jowel Boss কে মেনশন দিস,বস এই মুহূর্তে তোর নানির সাথে রুম ডেট করতে" "𝗕𝗢𝗦𝗦 𝗝𝗢𝗪𝗘𝗟 কে একবার মেনশন দিলে তোমারে থাবরাইয়া মুতের কালার চেঞ্জ কইরা ফালামু 🤭🙈🤖","𝗕𝗢𝗦𝗦 𝗝𝗢𝗪𝗘𝗟 কই থুমি থুমারে এক বলদে ডাকে😁🤣"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
        }
