import fetch from 'node-fetch'
import axios from 'axios'

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
if (!text) throw '*Masukkan link*\n Example: https://www.dailymotion.com/video/x6dmhc9'
let res = await axios('https://violetics.pw/api/downloader/dailymotion?apikey=beta&url=' + text)
let json = res.data
let dapet = json.result.url
	let row = Object.values(dapet).map((v, index) => ({
		title: htjava + 'š Quality: ' + v.quality,
		description: '\nā ID: ' + json.result.id + '\nā²ļø Title: ' + json.result.meta.title + '\nš URL: ' + v.url + '\nš Source: ' + json.result.meta.source + '\nšļø Views: ' + json.result.meta.duration + '\nš SD: ' + json.result.sd.url + '\n\nš HD: ' + json.result.hd.url,
		rowId: usedPrefix + 'get ' + v.url
	}))
	let button = {
		buttonText: `āļø ${command} Search Disini āļø`,
		description: `ā” Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}
handler.help = ['dailymotion'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(dm|dailymotion)$/i

handler.exp = 0
handler.register = false
handler.limit = false


export default handler