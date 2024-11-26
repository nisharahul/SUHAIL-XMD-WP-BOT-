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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_02_49_11_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAzMSxcbiAgICAgICAgMjE3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODMsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDY1LFxuICAgICAgICAxNixcbiAgICAgICAgNzgsXG4gICAgICAgIDI1MixcbiAgICAgICAgOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNixcbiAgICAgICAgNzcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTAsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTEzLFxuICAgICAgICA4MCxcbiAgICAgICAgODUsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjA3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTEyLFxuICAgICAgICA3NCxcbiAgICAgICAgNTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODYsXG4gICAgICAgIDU5LFxuICAgICAgICAxNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDczLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjIsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDc1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAzLFxuICAgICAgICA2NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDg2LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMixcbiAgICAgICAgNDksXG4gICAgICAgIDE5NixcbiAgICAgICAgMzQsXG4gICAgICAgIDgsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTAxLFxuICAgICAgICA2MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjgsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NixcbiAgICAgICAgNjksXG4gICAgICAgIDQwLFxuICAgICAgICA2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDM2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDU4LFxuICAgICAgICAzMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNixcbiAgICAgICAgMjQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNixcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjYsXG4gICAgICAgIDUxLFxuICAgICAgICA4NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTEsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMixcbiAgICAgICAgMTY1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTg4LFxuICAgICAgICA1OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDQ5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDcsXG4gICAgICAgIDM4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTkyLFxuICAgICAgICA3NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTg1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDM3LFxuICAgICAgICA4NCxcbiAgICAgICAgMjE5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTczLFxuICAgICAgICAyNTMsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJKd29HZU4zS1F0MXYyU05HOHJaeE5NMWlxZkkzTm5CS0V4b1AzMUJCdjJFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ0a1puc2Fyd1RlTzNHSXdaVkNsc1JRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjZlYzA3NjA4LWFkNDctNGVmZi04YmI3LTcwMzAzZjM1NGFlOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NyxcbiAgICAgIDEyMCxcbiAgICAgIDkyLFxuICAgICAgMTY3LFxuICAgICAgMTk4LFxuICAgICAgNzAsXG4gICAgICAxNTYsXG4gICAgICAxMDAsXG4gICAgICAyNDUsXG4gICAgICAxNzAsXG4gICAgICAyNDYsXG4gICAgICA0OSxcbiAgICAgIDQyLFxuICAgICAgMjM5LFxuICAgICAgNTYsXG4gICAgICA3OCxcbiAgICAgIDI1MyxcbiAgICAgIDE2MyxcbiAgICAgIDEwOCxcbiAgICAgIDc0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NCxcbiAgICAgIDE2NCxcbiAgICAgIDE3NixcbiAgICAgIDIyMyxcbiAgICAgIDE1MSxcbiAgICAgIDIwMSxcbiAgICAgIDIzLFxuICAgICAgMjUwLFxuICAgICAgMjIsXG4gICAgICAxNixcbiAgICAgIDIzNyxcbiAgICAgIDIzNixcbiAgICAgIDIxMSxcbiAgICAgIDE4NixcbiAgICAgIDYxLFxuICAgICAgMjQ3LFxuICAgICAgMjE1LFxuICAgICAgMTE1LFxuICAgICAgMTc4LFxuICAgICAgOTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMjVSQTU1MkNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxNzAxNzY1OTEyNDo2NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTkxODUyMzYzOTU2Mjc2OjY0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0o3Smw4NEdFTGJ1bExvR0dBZ2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSXZiZm50Y3BBbHJPdUZ2VWhUcGxrRFZ1bHFjTUtDNHpNYnpYS2hRY3JFRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI4cHc5OWNsRnR4eTh4SDZpUXdBOE9nWHpBVk42djJkL2gxODU4Y1dKc1BqUWkwbGVRd25KSHNmL0lKSzFaVzM1eFd0ZldkdmpSZ0hWZzh2enROclJEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJXYzYxOUNJYzBxVGo0Y1AzTDV3M1lyUE13aVR4alUyelIra1B3NFJybW8wMW5XamgrWUUvTUtMNDJVOG85cFd5SEx3L2s4VGFDc0liVi9ubUliQ2tEdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTcwMTc2NTkxMjQ6NjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyNTg5MzcwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSEhwXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFISHAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJFNUtQYjFQRHFLTFpmK1d1SEplcUhyMlhodDRiYXZOaXorYWJQWHlYcnRVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3NzQ1NzY3OTgsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsNV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
