import fs from 'fs'
import path from 'path'
let handler = async (m, { conn }) => {
conn.sendMessage(m.chat, {sticker: fs.readFileSync('./media/bott.webp')}, {quoted: m})
}
handler.customPrefix = /^(bot|hi bot|hii bot|hiii bot|hy)$/i
handler.command = new RegExp

export default handler
