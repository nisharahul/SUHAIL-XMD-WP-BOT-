const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_34_11_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzksXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDYwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDksXG4gICAgICAgIDcyLFxuICAgICAgICA2OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjMwLFxuICAgICAgICA5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODksXG4gICAgICAgIDk0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDMxLFxuICAgICAgICAyNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjksXG4gICAgICAgIDE5NixcbiAgICAgICAgNjEsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTUxLFxuICAgICAgICA2NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTA3LFxuICAgICAgICA1MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjAzLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDczLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTgwLFxuICAgICAgICAzOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDExNixcbiAgICAgICAgNDksXG4gICAgICAgIDgsXG4gICAgICAgIDEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjE5LFxuICAgICAgICAxODQsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDgsXG4gICAgICAgIDExMixcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTAzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDkzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1LFxuICAgICAgICA4NixcbiAgICAgICAgNjAsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDMxLFxuICAgICAgICA0MixcbiAgICAgICAgNzYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzksXG4gICAgICAgIDgxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDU5LFxuICAgICAgICA0MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDU5LFxuICAgICAgICAyMyxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzAsXG4gICAgICAgIDQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTgyLFxuICAgICAgICA4MixcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMixcbiAgICAgICAgMjMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjcsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExOCxcbiAgICAgICAgODYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTkxLFxuICAgICAgICA1NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDgwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAzMixcbiAgICAgICAgMTI4LFxuICAgICAgICAxODcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxLFxuICAgICAgICA3NixcbiAgICAgICAgMTYyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjA3LFxuICAgICAgICA1OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDgxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAzMixcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZklvTmVRVWcyVzRKWGkvbVFRd2l2K0NFWk9Pd3RralNveWZDR0pSUm5uWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTcwMTc2NTkxMjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkNCQ0FFN0M4REI5Q0FFREUxRkQzNjJEMzM0MUE5Rjg3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMjU0ODgzN1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJOcnhvdE1KMlR6V05tcXBXa3NteWVRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjYzMWQ0YzkzLWY1ZWEtNGExMy04ZWU0LTliMmM0ODhkYTc5MVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzNSxcbiAgICAgIDEzNSxcbiAgICAgIDE5MSxcbiAgICAgIDEzMixcbiAgICAgIDIsXG4gICAgICAxMjksXG4gICAgICAyMjUsXG4gICAgICAxNTAsXG4gICAgICA1NyxcbiAgICAgIDIxMSxcbiAgICAgIDk2LFxuICAgICAgMjIyLFxuICAgICAgMjEyLFxuICAgICAgMTQ3LFxuICAgICAgNjAsXG4gICAgICAyMjIsXG4gICAgICA0LFxuICAgICAgNjAsXG4gICAgICAxLFxuICAgICAgMTY3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMSxcbiAgICAgIDExLFxuICAgICAgNCxcbiAgICAgIDE1NixcbiAgICAgIDI1NCxcbiAgICAgIDE0LFxuICAgICAgMTkxLFxuICAgICAgMTQ5LFxuICAgICAgNTgsXG4gICAgICAyNTEsXG4gICAgICAxMDksXG4gICAgICA0OCxcbiAgICAgIDE0MCxcbiAgICAgIDIwNyxcbiAgICAgIDY3LFxuICAgICAgMjA2LFxuICAgICAgMSxcbiAgICAgIDY5LFxuICAgICAgNDcsXG4gICAgICA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjRCSjJKMVZNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTcwMTc2NTkxMjQ6NjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE5MTg1MjM2Mzk1NjI3Njo2M0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJSQUhVTCBQQU5DSEFMICDwn5KqXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSjdKbDg0R0VOMnhrcm9HR0FjZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJJdmJmbnRjcEFsck91RnZVaFRwbGtEVnVscWNNS0M0ek1ielhLaFFjckVFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImNCYmNUdjFSRlhxWnVLVjJhUXR1MU9oSWlNSFZsd2k4SHNiclhvYm16UnMzZklpVWxlU3lJTDd4QVhaR29Ua2d3UTBqZzFnRnFGcEUrRS84S2ZRZkNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlFlK21zSEpaenJsWDI5MVlnUHhqRVg2dzgzRE9ERDJMK09CaU15QlhJNHJPMnFtZjhCamN4ellFZUs5YnNjVGlLZHkyc3hYMzdBdi96UC9BS09VQWdBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxNzAxNzY1OTEyNDo2M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzI1NDg4MzMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFISHBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhIcC5qc29uIjogIntcImtleURhdGFcIjpcIkU1S1BiMVBEcUtMWmYrV3VISmVxSHIyWGh0NGJhdk5peithYlBYeVhydFU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc3NDU3Njc5OCxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSw1XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
