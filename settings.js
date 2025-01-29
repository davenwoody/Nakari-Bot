const chalk = require("chalk")
const fs = require("fs")
//aumto presence update
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.autoblockmorroco = true //auto block 212 (true to on, false to off)
global.wlcm = false
global.autokickmorroco = true //auto kick 212 (true to on, false to off) 
global.antispam = false//auto kick spammer (true to on, false to off)
//===============SETTING MENU==================\\
global.thumbnail = 'https://i.ibb.co.com/RpH9QCbC/Proyek-Baru-24-03047-A3.png'
global.ig = '@davenjebeh'
global.yt = 'DavenDev'
global.ttowner = '@davendev'
global.ownername = 'D.W'
global.owner = ['6287883612628'] // SETTING JUGA DI FOLDER DATABASE 
global.ownernomer = '6287883612628'
global.socialm = 'GitHub: davenwoody'
global.location = 'Indonesia' 
//========================setting Payment=====================\\
global.nodana = '-' // KOSONG KAN JIKA TIDAK ADA
global.nogopay = '-' // KOSONG KAN JIKA TIDAK ADA 
global.noovo = '-' // KOSONG KAN JIKA TIDAK ADA
//==================setting Payment Name===========================\\
global.andana = '-' // KOSONG KAN JIKA TIDAK ADA
global.angopay = '-' // KOSONG KAN JIKA TIDAK ADA
global.anovo = '-' // KOSONG KAN JIKA TIDAK ADA
//==================setting bot===========================\\
global.botname = "Nakari MD"
global.ownernumber = '6287883612628'
global.botnumber = '6287883612628'
global.ownername = 'D.W'
global.ownerNumber = ["6287883612628@s.whatsapp.net"]
global.ownerweb = "https://davenwoody.web.id"
global.websitex = "https://github.com/davenwoody"
global.wagc = "https://whatsapp.com/channel/0029VasUdsK0wajq5wU6cS3g"
global.saluran = "https://whatsapp.com/channel/0029VasUdsK0wajq5wU6cS3g"
global.themeemoji = '💐'
global.wm = "Nakari | by D.W"
global.botscript = 'link sc? https://github.com/davenwoody' //script link
global.packname = "Sticker By Daven Woody"
global.author = "\n\n\n\n\nCreate by Nakari\nNomor Bot : 6287883612628"
global.creator = "6287883612628@s.whatsapp.net"
//===========================//
global.tekspushkon = ""
global.tekspushkonv2 = ""
global.tekspushkonv3 = ""
global.tekspushkonv4 = ""
//===========================//
global.mess = {
wait: "*_Tunggu sebentar ya Kak♡._*",
   success: "Sukses Kak",
   on: "Sudah Aktif", 
   off: "Sudah Off",
   query: {
       text: "Teks Nya Mana Kak?",
       link: "Link Nya Mana Kak?",
   },
   error: {
       fitur: "Mohon Maaf Kak Fitur Eror Silahkan Chat Developer Bot Agar Bisa Segera Diperbaiki",
   },
   only: {
       group: "Maaf Kak Fitur Ini Hanya Bisa Digunakan Di Dalam Group",
       private: "Maaf Kak Fitur Ini Hanya Bisa Digunakan Di Dalam Private Chat",
       owner: "Maaf Kak Fitur Ini Hanya Bisa Digunakan Sama Owner Bot",
       admin: "Maaf Kak Fitur Ini Hanya Bisa Digunakan Sama Owner Bot",
       badmin: "Maaf Kak Kaya Nya Kakak Tidak Bisa Menggunakan Fitur Ini Di Karenakan Bot Bukan Admin Group",
       premium: "ᴍᴀᴀғ ᴋᴀᴍᴜ ʙᴇʟᴏᴍ ᴍᴇɴᴊᴀᴅɪ ᴜsᴇʀ ᴘʀᴇᴍɪᴜᴍ ᴜɴᴛᴜᴋ ᴍᴇɴᴊᴀᴅɪ ᴘʀᴇᴍɪᴜᴍ sɪʟᴀᴋᴀɴ ʙᴇʟɪ ᴅɪ ᴏᴡɴᴇʀ ᴅᴇɴɢᴀɴ ᴄᴀʀᴀ ᴋᴇᴛɪᴋ  .ᴏᴡɴᴇʀ",
   }
}
//========================================\\
global.decor = {
	menut: '❏═┅═━–〈',
	menub: '┊•',
	menub2: '┊',
	menuf: '┗––––––––––✦',
	hiasan: '꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷',

	menut: '––––––『',
    menuh: '』––––––',
    menub: '┊☃︎ ',
    menuf: '┗━═┅═━––––––๑\n',
	menua: '',
	menus: '☃︎',

	htki: '––––––『',
	htka: '』––––––',
	haki: '┅━━━═┅═❏',
	haka: '❏═┅═━━━┅',
	lopr: 'Ⓟ',
	lolm: 'Ⓛ',
	htjava: '❃'
}

//===========================//

global.rpg = {
    emoticon(string) {
        string = string.toLowerCase()
        let emot = {
            level: '📊',
            limit: '🎫',
            health: '❤️',
            exp: '✨',
            atm: '💳',
            money: '💰',
            bank: '🏦',
            potion: '🥤',
            diamond: '💎',
            common: '📦',
            uncommon: '🛍️',
            mythic: '🎁',
            legendary: '🗃️',
            superior: '💼',
            pet: '🔖',
            trash: '🗑',
            armor: '🥼',
            sword: '⚔️',
            makanancentaur: "🥗",
            makanangriffin: "🥙",
            makanankyubi: "🍗",
            makanannaga: "🍖",
            makananpet: "🥩",
            makananphonix: "🧀",
            pickaxe: '⛏️',
            fishingrod: '🎣',
            wood: '🪵',
            rock: '🪨',
            string: '🕸️',
            horse: '🐴',
            cat: '🐱',
            dog: '🐶',
            fox: '🦊',
            robo: '🤖',
            petfood: '🍖',
            iron: '⛓️',
            gold: '🪙',
            emerald: '❇️',
            upgrader: '🧰',
            bibitanggur: '🌱',
            bibitjeruk: '🌿',
            bibitapel: '☘️',
            bibitmangga: '🍀',
            bibitpisang: '🌴',
            anggur: '🍇',
            jeruk: '🍊',
            apel: '🍎',
            mangga: '🥭',
            pisang: '🍌',
            botol: '🍾',
            kardus: '📦',
            kaleng: '🏮',
            plastik: '📜',
            gelas: '🧋',
            chip: '♋',
            umpan: '🪱',
            naga: "🐉",
            phonix: "🦅",
            kyubi: "🦊",
            griffin: "🦒",
            centaur: "🎠",
            skata: '🧩'
        }
        let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
        if (!results.length) return ''
        else return emot[results[0][0]]
    }
}

//new
global.prefix = ['','!','.','#','&']
global.sessionName = 'nakari'
global.hituet = 0
//media target
global.thum = fs.readFileSync("./data/image/thumb.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./data/image/thumb.jpg") //ur logo pic
global.err4r = fs.readFileSync("./data/image/thumb.jpg") //ur error pic
global.thumb = fs.readFileSync("./data/image/thumb.jpg") //ur thumb pic
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' //default pp wa

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.keyopenai = "pk-pIWAlRroXTOAigkWdHcYvmlmgzEQXuoMWbVAaLAVZswSRbEB"
//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
