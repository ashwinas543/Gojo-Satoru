//═══════════════════════════════════════════════════════//
//
//                              𝙶𝙾𝙹𝙾-𝚂𝙰𝚃𝙾𝚁𝚄 𝓫𝔂 𝓷𝓮𝔁𝓾𝓼𝓝𝔀
//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼  𝚂𝙲𝚁𝙸𝙿𝚃 𝙾𝙵 𝙲𝙷𝙴𝙴𝙼𝚂𝙱𝙾𝚃 𝚅2 𝙱𝚈 𝙳𝙶𝚇𝚎𝚘𝚗 
//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'b219fb3a98',
}

//customize settings\\
global.owner = ['916282137207']
global.premium = ['916282137207']
global.ownernomer = '916282137207'
global.ownername = '⸸ꪶ𝑰𝑻𝑺  𝑴𝑬  𝑳𝑼𝑻𝑻𝑨𝑷𝑷𝑰  ⃟🇮🇳'
global.botname = '⸸ꪶ𝑰𝑻𝑺  𝑴𝑬  𝑳𝑼𝑻𝑻𝑨𝑷𝑷𝑰  ⃟🇮🇳'
global.footer = '⸸ꪶ𝑰𝑻𝑺  𝑴𝑬  𝑳𝑼𝑻𝑻𝑨𝑷𝑷𝑰  ⃟🇮🇳.'
global.ig = 'https://github.com/ashwinas543'
global.region = 'India, South India, Kerala'
global.sc = 'https://github.com/ashwinas543/Gojo-Satoru'
global.myweb = 'wa.me/916282137207?text=hlo+bro+big+fan+💖'
global.packname = '⸸ꪶ𝑰𝑻𝑺  𝑴𝑬  𝑳𝑼𝑻𝑻𝑨𝑷𝑷𝑰  ⃟🇮🇳'
global.author = 'ī.am/ꪶ͢𝕷𝒖𝒕𝒕𝒂𝒑𝒑ὶ♛'
global.sessionName = 'session'
global.prefa = ['','!','.','🙂','🙂','🙂']
global.sp = '⭔'
global.mess = {
    success: 'ok bro 🙂💖',
    admin: 'This Feature Is Only For Admin!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'This Feature Is Only For Owner!',
    group: 'Feature Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This Feature Is Only For Bot',
    wait: 'Wait A minute...',
    error: 'Error! 🥲!',
    endLimit: 'daily limit reached 🥲sry',
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./GojoMedia/IMG-20220729-WA0207.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update this endi'${__filename}'`))
	delete require.cache[file]
	require(file)
})
