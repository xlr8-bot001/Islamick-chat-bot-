module.exports.config = {
    name: 'autotime',
    version: '10.02',
    hasPermssion: 0,
    credits: 'Islamick Chat',
    description: 'সেট করা সময় অনুযায়ী স্বয়ংক্রিয়ভাবে বার্তাগুলি পাঠানো হবে!',
    commandCategory: 'noprefix',
    usages: '[]',
    cooldowns: 3
};
const nam = [{
    timer: '12:00:00 AM',
    message: ['সুবহানাল্লাহ্-!!✨🌺']
},
             {
    timer: '1:00:00 AM',
    message: ['আলহামদুলিল্লাহ-!!❤️‍🩹😊🤗']
},
						{
    timer: '2:00:00 AM',
    message: ['লা-ইলাহা ইল্লাল্লাহ-!!✨🧡']
},
						 {
    timer: '3:00:00 AM',
    message: ['আল্লাহু আকবার-!!✨🧡']
},
						 {
    timer: '4:00:00 AM',
    message: ['আল্লাহুম্মাগফিরলি-!!✨🧡🤲 ']
},
						 {
    timer: '5:00:00 AM',
    message: ['লা-ইলাহা ইল্লাল্লাহু মুহাম্মাদুর রাসূলুল্লাহ (সা:) ✨🧡']
},
						 {
    timer: '6:00:00 AM',
    message: ['লা-ইলাহা ইল্লা আংতা সুবহানাকা ইন্নি কুংতুম মিনায জোয়ালিমিন-!!✨🌺 ']
},
						 {
    timer: '7:00:00 AM',
    message: ['সল্লাল্লাহু আলাইহি ওয়াসাল্লাম-!!✨🧡']
},
						 {
    timer: '8:00:00 AM',
    message: [''আল্লাহুম্মা আজিরনি মিনান-নার-!!✨🧡]
},
						 {
    timer: '9:00:00 AM',
    message: ['ইয়া রব্বিগফিরলি-!!🤲❤️']
},
             {
    timer: '10:00:00 AM',
    message: ['আস্তাগফিরুল্লাহ-!!💜😔' ]
},
						 {
    timer: '11:00:00 AM',
    message: ['আল্লাহ হুম্মা সাল্লি ওয়া সাল্লিম আলা নাব্যিয়িনা মুহাম্মদ-!!✨🧡😊']
},
						 {
    timer: '12:00:00 PM',
    message: ['লা ইলাহা ইল্লাল্লাহু মুহাম্মাদুর রসুলুল্লাহ (সাঃ)✨🤍💫']
},					
						 {
    timer: '1:00:00 PM',
    message:['সুবহানআল্লাহি ওয়াবিহামদিহী-!!✨🌸🌺']
},
						 {
    timer: '2:00:00 PM',
    message: ['লা হাওলা ওয়ালা কুওয়াতা ইল্লাহ বিল্লাহ-!!❤️😔🤲']
},
						 {
    timer: '3:00:00 PM',
    message: ['লা ইলাহা ইল্লা আনতা সুবাহানাকা ইন্নি কুনতু মিনাজ যোয়ালিমিন-!!💜🥺🤲']
},
						 {
    timer: '4:00:00 PM',
    message: ['আল্লাহুম্মাগফিরলি-!!💖😭🤲']
},
						{
    timer: '5:00:00 PM',
    message: ['রাব্বিগফিরলি-!!✨💜😔']
},
						 {
    timer: '6:00:00 PM',
    message: ['লা-হাওলা ওয়ালা কুউওয়াতা ইল্লা-বিল্লাহ-!!✨💜']
},
						 {
    timer: '7:00:00 PM',
    message: ['ইয়া জাব্বারুল মোতাকাব্বির-!!✨🌺😔🤲 ']
},
             {
    timer: '8:00:00 PM',
    message: ['সুবহানআল্লাহি ওয়াবিহামদিহী-!!✨❤️🌸']
},
             {
    timer: '9:00:00 PM',
    message: ['আল্লাহ আকবার-!!✨💜✊']
},
             {
    timer: '10:00:00 PM',
    message: ['ইয়া রাহমানুর রাহিম-!!✨❤️‍🩹🤲']
},
            {
    timer: '11:00:00 PM',
    message: ['লা ইলাহা ইল্লাল্লাহু-!!✨🌸🤍🖤☝️']
}];
module.exports.onLoad = o => setInterval(() => {
    const r = a => a[Math.floor(Math.random()*a.length)];
    if (á = nam.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())) global.data.allThreadID.forEach(i => o.api.sendMessage(r(á.message), i));
}, 1000);
module.exports.run = o => {};
