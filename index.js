const { Telegraf } = require('telegraf')

const bot = new Telegraf("5030611936:AAG0ToanPor7o_A9pF3c7YIPdqRMSqVFKoI")
bot.start((ctx) => ctx.reply('Нажмите /help чтобы получить больше информации'))
bot.help((ctx) => ctx.reply('/id мой айди в игре\n/contact способ связи со мной\n/link мои соц сети\n/add реклама/предложения\n/clan информация про клан/набор в клан\n/crate аккаунт на открытие                                                                                                               /developer разработчик бота                                                                                                                  /botversion информация о версии бота                                                                                                                                   '))
bot.command('id', (ctx) => ctx.reply('мой айди 575831447                                                                                                                                    используйте /help для того чтобы вернуться в главное меню'))
bot.command('contact', (ctx) => ctx.reply('телеграмм @Prosti_Bro                                                                                                                                    используйте /help для того чтобы вернуться в главное меню'))
bot.command('link', (ctx) => ctx.reply('/tg телеграмм \nскоро больше используйте \n/help для того чтобы вернуться в главное меню'))
bot.command('tg', (ctx) => ctx.reply('https://t.me/pubgm_leaks                                                                                                                                    используйте /help для того чтобы вернуться в главное меню'))
bot.command('yt', (ctx) => ctx.replyWithPhoto({ source: '1.jpg' }, { caption: "https://youtube.com/channel/UCixpDFP-NdB8ywP_ieygAMQ" }))
bot.command('add', (ctx) => ctx.reply('Главные менеджеры по рекламе @The_Katty и @Prosti_Bro                                                                                                                                    используйте /help для того чтобы вернуться в главное меню'))
bot.command('clan', (ctx) => ctx.reply('Требования вступления в клан:                                                                                                           КД от 2.5 на 100 матчей                                                                                                                              на счет вступления в клан писать @The_Katty                                                                                                                                     используйте /help для того чтобы вернуться в главное меню'))
bot.command('crate', (ctx) => ctx.reply('По поводу открытия кейсов писать @The_Katty, @Prosti_Bro или мне в директ https://www.instagram.com/prosti_bro/                                                                                               UC даю от 300 кейсов                                                                                                                                    используйте /help для того чтобы вернуться в главное меню'))
bot.command('developer', (ctx) => ctx.reply('Разработчик данного бота @pbAndrey5                                                                                                                                    используйте /help для того чтобы вернуться в главное меню'))
bot.command('botversion', (ctx) => ctx.reply('Версия бота 0.0.9                                                                                                                                    используйте /help для того чтобы вернуться в главное меню'))
bot.hears('hi', (ctx) => ctx.reply('Hey there                                                                                                                                    используйте /help для того чтобы вернуться в главное меню'))
bot.hears('Ютуб', (ctx) => ctx.reply('ссылка на ютуб www.youtube.com'))
bot.hears('фото', (ctx) => ctx.replyWithPhoto({ source: '10.png' }))

bot.launch()