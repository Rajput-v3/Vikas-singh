const fs = require("fs");
module.exports.config = {
	name: "Ankit",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Priyansh", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "Vikas",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Ankit")==0 || event.body.indexOf("@Ankit")==0 || event.body.indexOf("ankit")==0) {
		var msg = {
				body: "❣️❣️❣️ 𝐕𝐈𝐊𝐀𝐒 𝐊𝐈 𝐄𝐊𝐋❍𝐓𝐈 𝐉𝐀𝐍𝐄𝐌𝐀𝐍 😍😍 😇⃟ ",
				attachment: fs.createReadStream(__dirname + `/cache/ankit.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
