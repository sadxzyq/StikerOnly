import { readFileSync } from 'fs'
import fs from 'fs'

let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return
    
let res = JSON.parse(readFileSync('./json/emoji.json'))
let em = res.emoji
/*
    conn.sendMessage(m.chat, {
          react: {
            text: em.getRandom(),
            key: m.key,
          }})*/
    let regl = /(I love you|love you|mwah)/i
    let isLoveYou = regl.exec(m.text)
    let lovou = [
'❤️',
'🥰',
'😍'
]
let loveyou = lovou[Math.floor(Math.random() * lovou.length)]
    if (isLoveYou && !m.fromMe) {
    let helloaine = fs.readFileSync('./mp3/mwah.mp3') 
    conn.sendMessage(m.chat, {
        react: {
          text: em.getRandom(),
          key: m.key,
        }})
   setTimeout(() => {
        conn.sendFile(m.chat, helloaine, '', '', m, true)
    }, 1000)
    }

    let ass = /(assalamualaikum|assallamualaikum|assalamu\'alaikum|as\'salamualaikum)/i
    let isAss = ass.exec(m.text)
    let assal = [
'🥰',
'🙏',
'😀',
'😊',
'🙂'
]
let assl = assal[Math.floor(Math.random() * assal.length)]
    if (isAss && !m.fromMe) {
    let assalamualaikum = fs.readFileSync('./mp3/waalaikumussalam.ogg')
    conn.sendMessage(m.chat, {
        react: {
          text: em.getRandom(),
          key: m.key,
        }})
    setTimeout(() => { m.reply('Waalaikumussalam')
    conn.sendFile(m.chat, assalamualaikum, '', '', m, true)
    }, 1000)
    }
    

    let Ara = /(menu)/i
    let isArr = Ara.exec(m.text)
    let Arra = [
'😜',
'🗿',
'🤖',
'😈'
]
let Araa = Arra[Math.floor(Math.random() * Arra.length)]
    if (isArr && !m.fromMe) {
    let Arraa = fs.readFileSync('./mp3/patrick.mp3')
    conn.sendMessage(m.chat, {
        react: {
          text: em.getRandom(),
          key: m.key,
        }})
    setTimeout(() => {
    conn.sendFile(m.chat, Arraa, '', '', m, true)
    }, 1000)
    }
    
    //Respond Anjay
let Anjy = /(anjay|anjyy|an4y)/i
    let isAnj = Anjy.exec(m.text)
    let Anjj = [
'😅'
]
let njy = Anjj[Math.floor(Math.random() * Anjj.length)]
    if (isAnj && !m.fromMe) {
    let ajy = fs.readFileSync('./mp3/anjay.opus')
    conn.sendMessage(m.chat, {
        react: {
          text: em.getRandom(),
          key: m.key,
        }})
    setTimeout(() => {
    conn.sendFile(m.chat, ajy, '', '', m, true)
    }, 1000)
    }
    //Respond aman?
   let aman = /(anjing|anj|ajg|anjnk|anjim|asu|babi|tod|ngentod|ngtd|kontol|memek|mek|tempek|kampang|dancok|cok|su|bbi|ajng|anjnk|tol|kontol|kntl|jing|jng)/i
    let isam = aman.exec(m.text)
    let amn = [
'😱'
]
let man = amn[Math.floor(Math.random() * amn.length)]
    if (isam && !m.fromMe) {
    let mmn = fs.readFileSync('./mp3/wtf.mp3')
    conn.sendMessage(m.chat, {
        react: {
          text: em.getRandom(),
          key: m.key,
        }})
    setTimeout(() => {
    conn.sendFile(m.chat, mmn, '', '', m, true)
    }, 1000)
    }
        //Respond aman?
   let haalo = /(halo|hlo|hai|hii|hi)/i
    let isha = haalo.exec(m.text)
    let haa = [
'😅'
]
let haala = haa[Math.floor(Math.random() * haa.length)]
    if (isha && !m.fromMe) {
    let hloo = fs.readFileSync('./mp3/halo.mp3')
    conn.sendMessage(m.chat, {
        react: {
          text: em.getRandom(),
          key: m.key,
        }})
    setTimeout(() => {
    conn.sendFile(m.chat, hloo, '', '', m, true)
    }, 1000)
    }
    //Respond p
   let pe = /(pe)/i
let ispi = pe.exec(m.text)
let pa = [
'🖕',
'🙄',
'😪',
'😼',
'😱'
]
let pep = pa[Math.floor(Math.random() * pa.length)]
    if (ispi && !m.fromMe) {
    let pp = fs.readFileSync('./mp3/pp.mp3')
    conn.sendMessage(m.chat, {
        react: {
          text: em.getRandom(),
          key: m.key,
        }})
        setTimeout(() => {
    conn.sendFile(m.chat, pp, '', '', m, true)
    }, 1000)
    }
        //respond panggilan 
       let oy = /(bang|woi|cok|bot|dark|dar|we|wee|cuk|cuy|sat|bott|satrio)/i
let isoiy = oy.exec(m.text)
    if (isoiy && !m.fromMe) {
    let oyy = fs.readFileSync('./mp3/oy.mp3')
    conn.sendMessage(m.chat, {
        react: {
          text: em.getRandom(),
          key: m.key,
        }})
        setTimeout(() => {
    conn.sendFile(m.chat, oyy, '', '', m, true)
    }, 1000)
    }
            //Respond yntkts
   let gaktau = /(yntkts|yah gak tau|gak tau|tau)/i
    let istau = gaktau.exec(m.text)
    let gk = [
'😅'
]
let gktau = gk[Math.floor(Math.random() * gk.length)]
    if (istau && !m.fromMe) {
    let ggktau = fs.readFileSync('./mp3/yntkts.mp3')
    conn.sendMessage(m.chat, {
        react: {
          text: em.getRandom(),
          key: m.key,
        }})
    setTimeout(() => {
    conn.sendFile(m.chat, ggktau, '', '', m, true)
    }, 1000)
    }
                //Respond anjingngejar
   let anjingngejar = /(anjgg|goblok|anjing|ngejar)/i
    let isanjinglah = anjingngejar.exec(m.text)
    if (isanjinglah && !m.fromMe) {
    let gpnyek = fs.readFileSync('./mp3/anjingngejar.mp3')
    conn.sendMessage(m.chat, {
        react: {
          text: em.getRandom(),
          key: m.key,
        }})
    setTimeout(() => {
    conn.sendFile(m.chat, gpnyek, '', '', m, true)
    }, 1000)
    }
                               //Respond apaantuh
   let paan = /(jadianime)/i
    let isand = paan.exec(m.text)
    if (isand && !m.fromMe) {
    let gpan = fs.readFileSync('./mp3/anime.mp3')
    conn.sendMessage(m.chat, {
        react: {
          text: em.getRandom(),
          key: m.key,
        }})
    setTimeout(() => {
    conn.sendFile(m.chat, gpan, '', '', m, true)
    }, 1000)
    }
   //Respond gak boleh
   let nsfw = /(nsfw|viral|viral1|viral2|viral3|bokep)/i
    let issu = nsfw.exec(m.text)
    if (issu && !m.fromMe) {
    let sange = fs.readFileSync('./mp3/dosapantek.mp3')
    conn.sendMessage(m.chat, {
        react: {
          text: em.getRandom(),
          key: m.key,
        }})
        setTimeout(() => {
    conn.sendFile(m.chat, sange, '', '', m, true)
    }, 1000)
    }
       //Respond owner
   let Owen = /(owner)/i
    let iswen = Owen.exec(m.text)
    if (iswen && !m.fromMe) {
    let owwn = fs.readFileSync('./mp3/owner.mp3')
    conn.sendMessage(m.chat, {
        react: {
          text: em.getRandom(),
          key: m.key,
        }})
        setTimeout(() => {
    conn.sendFile(m.chat, owwn, '', '', m, true)
    }, 1000)
    }
       //Respond sc
   let esce = /(sc)/i
    let isce = esce.exec(m.text)
    if (isce && !m.fromMe) {
    let sce = fs.readFileSync('./mp3/sc.mp3')
    conn.sendMessage(m.chat, {
        react: {
          text: em.getRandom(),
          key: m.key,
        }})
        setTimeout(() => {
    conn.sendFile(m.chat, sce, '', '', m, true)
    }, 1000)
    }
       //Respond tqto
   let tqto = /(tqto)/i
    let istq = tqto.exec(m.text)
    if (istq && !m.fromMe) {
    let tt = fs.readFileSync('./mp3/tqto.mp3')
    conn.sendMessage(m.chat, {
        react: {
          text: em.getRandom(),
          key: m.key,
        }})
        setTimeout(() => {
    conn.sendFile(m.chat, tt, '', '', m, true)
    }, 1000)
    }
    //Respond nantang
   let gelud = /(nantang|gelut|gelud)/i
    let isahh = gelud.exec(m.text)
    if (isahh && !m.fromMe) {
    let gglud = fs.readFileSync('./mp3/menantang.mp3')
    conn.sendMessage(m.chat, {
        react: {
          text: em.getRandom(),
          key: m.key,
        }})
    setTimeout(() => {
    conn.sendFile(m.chat, gglud, '', '', m, true)
    }, 1000)
    }
    //Respond mimpi
   let mimpimya = /(ngmbek|ngmbk|ngambk|mrh|ututu|tayang|tyg|utu|ngambek|marah)/i
    let ismim = mimpimya.exec(m.text)
    if (ismim && !m.fromMe) {
    let mimi = fs.readFileSync('./mp3/ngambek.mp3')
    conn.sendMessage(m.chat, {
        react: {
          text: em.getRandom(),
          key: m.key,
        }})
    setTimeout(() => {
    conn.sendFile(m.chat, mimi, '', '', m, true)
    }, 1000)
    }
    //Respond apaantuh
   let taaggowner = /(6282285357346)/i
    let isown = taaggowner.exec(m.text)
    if (isown && !m.fromMe) {
    let gowny = fs.readFileSync('./mp3/ganteng.mp3')
    conn.sendMessage(m.chat, {
        react: {
          text: em.getRandom(),
          key: m.key,
        }})
    setTimeout(() => {
    conn.sendFile(m.chat, gowny, '', '', m, true)
    }, 1000)
    }
    //Respond woah
   let krn = /(keren|kren|kern|mntap|mntp|good|nc)/i
    let iskren = krn.exec(m.text)
    if (iskren && !m.fromMe) {
    let krenz = fs.readFileSync('./mp3/woah.mp3')
    conn.sendMessage(m.chat, {
        react: {
          text: em.getRandom(),
          key: m.key,
        }})
    setTimeout(() => {
    conn.sendFile(m.chat, krenz, '', '', m, true)
    }, 1000)
    }
} 

handler.limit = false
export default handler
 function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }
