const { Client, Intents } = require('discord.js')
const token = 'ODg3OTY3NDI1NzM4NDY5Mzk2.YUL2Gw.IV_fbkVqVdQXfcgF3uUwbCrbSCw'
const tokengif = '8M9418JM4IT5'
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})



client.once('ready', () => {
    console.log('Ready!')
})

client.on('message', (msg) => {

    var date = new Date()
    var jam = date.getHours()
    var menit = date.getMinutes()
    var detik = date.getSeconds()

    if (msg.content == 'ping') {
        msg.channel.send('pong')
    }
    // 5 w 1 h
    if (msg.content.includes('kamu')) {
        // siapa
        if (msg.content.includes('siapa')) {
            if (msg.content == 'kamu siapa') {
                msg.channel.send('kamu nanya?')
                msg.channel.send('pake tanda tanya (?) atuh')
            }
            if (msg.content.includes('?')) {
                msg.channel.send('aku bot buatan ajiji')
            }
        }
        // di mana
        else if (msg.content.includes('di mana')) {
            if (msg.content == 'kamu di mana') {
                msg.channel.send('kamu nanya?')
                msg.channel.send('pake tanda tanya (?) atuh')
            }
            if (msg.content.includes('?')) {
                msg.channel.send('aku di server node js')
            }
        }
        // lagi
        else if (msg.content.includes('lagi')) {
            msg.channel.send('lagi apa tuch')
        }
    }
    // pesan toxic
    if (msg.content.includes('ajg')) {
        msg.channel.send('jangan ngomgon kasar atuh')
    }
    //waktu
    if (msg.content == 'waktu') {
        msg.channel.send(`${jam}:${menit}:${detik}`)
    }
    // selamat malam
    if (jam == 21 & menit == 00 & detik == 1) {
        msg.channel.send('Selamat Malam')
    }
    // jokes
    if (msg.content == 'minta jokes') {
        const data = {
            jokes: [{
                q: 'binatang-binatang apa yang bisa travelling?',
                a: 'belibis'
            },
            {
                q: 'kenapa orang botak gak bisa jadi presiden?',
                a: 'karena dia gabisa nyalon'
            },
            {
                q: 'keris-keris apa yang bisa mukul',
                a: 'keris jon'
            },
            {
                q: 'kenapa orang jogja pada manis?',
                a: 'gak tau itu juga kata sumanto'
            },
            {
                q: 'teman saya dipanggil namanya, tapi kalo saya dipanggil',
                a: 'nengok'
            },
            {
                q: 'kenapa kerang di laut',
                a: 'kalau di darat kering'
            },
            {
                q: 'batre apa yang islami?',
                a: 'alkalin'
            },
            {
                q: 'apa penyebab kulit kering',
                a: 'handuk'
            },
            {
                q: 'kenapa cicak mutusin ekor nya secara tiba-tiba',
                a: 'gak tau. padahal bisa di omongin secara baik-baik kalo putus'
            },
            {
                q: 'kota-kota apa yang selalau buru-buru',
                a: 'cikarang'
            },
            {
                q: 'istri-istri apa yang kecil',
                a: 'microwife'
            },
            {
                q: 'permen-permen apa yang besar',
                a: 'candy borobudur'
            },
            {
                q: 'mau jadi kuli bangunan',
                a: 'tapi kerjaan nya malu-maluin'
            },
            {
                q: 'sayur apa yang ikut perang',
                a: 'sayur mayor'
            }]
        }
        let random = Math.floor(Math.random() * data.jokes.length)
        msg.channel.send(data.jokes[random].q)
        setTimeout(() => {
            msg.channel.send(data.jokes[random].a)
        }, 4000)
    }
    //gombal
    if (msg.content == 'minta gombal') {
        const data = {
            gombal: [{
                q: 'kamu jangan ke dapur yah..',
                a: 'entar gula nya insecure sama kamu'
            }
            ]
        }
        let random = Math.floor(Math.random() * data.gombal.length)
        msg.channel.send(data.gombal[random].q)
        setTimeout(() => {
            msg.channel.send(data.gombal[random].a)
        }, 4000)
    }

})
client.login(token)