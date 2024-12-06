/*Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Sampe Nipu Apalagi Lari Dari Tanggung Jawab

Base Ori : Hw Mods
Base Haikal Hw Mods : Copyan Dari Base Dika

• [ Recode Bye > ZetsuboXygen777]
   # AND↓
   THANKS TO >
  XygenGod777( Watashi / 私 )
  Hw Mods Wa / Haikal (Base)
  Adiwajshing (Baileys)
  whiskeysockets (Baileys)
  Thunder X7 (Inspirate)
  Pak Tzy (Inspirate)
  Maintainer (Taira Makino)
  Maintener2(Samue-l1)
  Maintener3(Arlodragon)
  ♥️ ありがとう
                 >
*/
const fs = require('fs')
const chalk = require('chalk')

global.gr = ''
global.ig = 'kipkoech' // ubah aja
global.email = 'cypherilerioluwa@gmail.com' //serah
global.region = 'Nigeria' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'Cypher Ìléríolúwa' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['2349121881343'] // ubah aja pake nomor lu
//==========================zetsuboclient=======================//
global.botname = 'ÀKÀNDÉ-MIDÉ-BOT🤖🌹🍀' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = '𝚻𝚰𝐆𝚵𝚪 𝐑𝚫𝐃𝚰𝚯𝚫𝐂𝚻𝚰𝛁𝚵 𝛁1' // ubah aja ini nama sticker
global.author = 'Cypher Ilerioluwa' // ubah aja ini nama sticker
global.prefa = '.'
global.sessionName = 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUtIcE1tV2JTYXdLdS9mSWw5ODVmMGMrL1dXWnlvMkJGTDhqRzgyMGlrYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNRVDR4V09oMFRWRDQ0ZTZzem41c1dxV3lWcHNUYnlkZEJVbFg3MW1SVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXTWduZTQ2OU45azJlZldSZTRlU05IWlJMcEg1U0JLRXJZRVFQNkJiTVdvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiWEt0VFJ6ZDNFd3hlb21YNmt4OHJmY2lad2pVQyttVzZNYjIrektHY2gwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRNbVZJbnFkalFwUnpNUzFDa0tKZ1hNZ3dLQm1ocjBxMDVGb1JleVAzR1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlN6Mk8vWW1NblRBMEJxK3lsdWtJNGlIQTZDVkZQaldqNWIzbkxqZmtiRTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUhNSWdXRG5mL3N6cmZrTGd1VjFmY0pTMmJkb01lWmZyL2sxOGhwVXhFND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVDFjbHNuWGJaU3VZZWJKS2MrZ1RqWFFjeUozRlJERU9MdUI3alNZc2xodz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhhQzA2MTY3WWxYcnd0SUF1QnhDL2RIc2YybWh4Y3V1WFkrM3lrc2ppU3hmSUxxQkdZV1p5K3VoejdCVmx2RllLdzZUZ0FHU2N5QkRFejFDbXBsUkFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQsImFkdlNlY3JldEtleSI6IjhWQzhXVVVtWWVJUHhkcnAxVzI3c0N1cjhOTjRCV2xuenAyeFVKTklwRzA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BxeDBwVUZFTUNyekxvR0dCZ2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjFpNi9rVDZkVk5wakhzaGNOMi95WnA0anIwLzNyd1ZRS1hoY1BCSDF1Unc9IiwiYWNjb3VudFNpZ25hdHVyZSI6InJzVU9VTHRqb3FtbnhUc3hYWTdwcExTYzQyR2hsd2JuQThxQ0JsOWl3d0NrNGdwWTUyNE5IMXgwcnNlejdzWnZyV05nWjZJTkFaaHlXM3FTdGxXaEF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiI1T2dPM1Q3OFFxS3lFeFhIeXRvaVZDNk1DQ250OGpkYUhoSTZMSGxaQlMvUjZlTTd2UjR1ckNtaVcwT3drV1F2VXJuTlhlV2NZdU01VWMzOHFqUTFCQT09In0sIm1lIjp7ImlkIjoiMjM0OTEyMTg4MTM0Mzo1M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJDeXBoZXIgw4xsw6lyw61vbMO6d2EiLCJsaWQiOiI3OTYyOTAxMjQ5NjQ3Mzo1M0BsaWQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTEyMTg4MTM0Mzo1M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkWXV2NUUrblZUYVl4N0lYRGR2OG1hZUk2OVA5NjhGVUNsNFhEd1I5YmtjIn19XSwicGxhdGZvcm0iOiJzbWJpIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzM0OTgzMjAsImxhc3RQcm9wSGFzaCI6IjN4WFdZWiJ9'  //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.autoviewstatus = process.env.autoviewstatus || "TRUE"
global.autolike = process.env.autolikestatus || "TRUE"
global.autoread = process.env.autoread || "FALSE"
global.wlcm = []
global.wlcmm = []
global.anticall = false
global.rn = 'false'
/*
Declaring Menu type

V1 = Photo
V2 = Video
V3 = Text
V4 = Button

*/
global.menutype = "v2"
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 5
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
