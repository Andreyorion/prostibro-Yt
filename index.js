const { Telegraf } = require('telegraf')

const bot = new Telegraf("5030611936:AAG0ToanPor7o_A9pF3c7YIPdqRMSqVFKoI")
bot.start((ctx) => ctx.reply('Нажмите /help чтобы получить больше информации0'))
bot.help((ctx) => ctx.reply('/id мой айди в игре\n/contact способ связи со мной\n/link мои соц сети\n/add реклама/предложения\n/clan информация про клан/набор в клан\n/crate аккаунт на открытие\n/developer разработчик бота\n\n/botversion информация о версии бота'))
bot.command('id', (ctx) => ctx.reply('мой айди 575831447\n\nиспользуйте /help для того чтобы вернуться в главное меню'))
bot.command('contact', (ctx) => ctx.reply('Телеграмм @Prosti_Bro\n\nиспользуйте /help для того чтобы вернуться в главное меню'))
bot.command('link', (ctx) => ctx.replyWithPhoto({ source: '2.jpg' }, { caption: "/tg телеграмм\n/tt мой тик ток\n/vk я в контакте\n/donation поддержать меня монеткой\n/insta моя инста\n/yt ютуб канал\n\n/help для того чтобы вернуться в главное меню"}))
bot.command('tg', (ctx) => ctx.replyWithPhoto({ source: '3.jpg' }, { caption: "https://youtube.com/channel/UCixpDFP-NdB8ywP_ieygAMQ" }))
bot.command('yt', (ctx) => ctx.replyWithPhoto({ source: '1.jpg' }, { caption: "https://youtube.com/channel/UCixpDFP-NdB8ywP_ieygAMQ" }))
bot.command('add', (ctx) => ctx.reply('Главные менеджеры по рекламе @The_Katty и @Prosti_Bro\n\nиспользуйте /help для того чтобы вернуться в главное меню'))
bot.command('clan', (ctx) => ctx.reply('Требования вступления в клан:\nКД от 2.5 на 100 матчей\n\nна счет вступления в клан писать @The_Katty\nВНИМАНИЕ\nна данный момент мест для вступления в клан нет\n\nиспользуйте /help для того чтобы вернуться в главное меню'))
bot.command('crate', (ctx) => ctx.reply('По поводу открытия кейсов писать @The_Katty, @Prosti_Bro или мне в директ https://www.instagram.com/prosti_bro/\n\nUC даю от 350 кейсов(премиум,класик,припасы)\n\nиспользуйте /help для того чтобы вернуться в главное меню'))
bot.command('developer', (ctx) => ctx.reply('Разработчик данного бота @pbAndrey5\n\nиспользуйте /help для того чтобы вернуться в главное меню'))
bot.command('botversion', (ctx) => ctx.reply('Версия бота 0.0.9\n\nиспользуйте /help для того чтобы вернуться в главное меню'))
bot.hears('hi', (ctx) => ctx.reply('Hey there\n\nиспользуйте /help для того чтобы вернуться в главное меню'))
bot.command('insta', (ctx) => ctx.replyWithPhoto({ source: '7.jpg' }, { caption: "https://www.instagram.com/prosti_bro/" }))
bot.command('tt', (ctx) => ctx.replyWithPhoto({ source: '4.jpg' }, { caption: "https://vm.tiktok.com/ZSeyrX4TC/" }))
bot.command('vk', (ctx) => ctx.replyWithPhoto({ source: '5.jpg' }, { caption: "https://m.vk.com/zarubin_aleksandr" }))
bot.command('donation', (ctx) => ctx.replyWithPhoto({ source: '6.jpeg' }, { caption: "https://www.donationalerts.com/r/prosti_bro" }))
bot.launch()