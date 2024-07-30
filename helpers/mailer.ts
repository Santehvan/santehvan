import nodemailer from 'nodemailer';
import bcryptjs from 'bcryptjs';
import User from '@/lib/models/user.model';
import { useToast } from "@/components/ui/use-toast"

export const sendEmail = async({email, emailType, userId}:any) => {
    try {
        // create a hased token
       

       

       var transport = nodemailer.createTransport({
          host: "live.smtp.mailtrap.io",
          port: 587,
          auth: {
            user: "api",
            pass: "3a37c2d40a132e125065bef93fb2207d"
          }
        });

        const mailOptions = {
            from: 'santehvan@gmail.com',
            to: email,
            subject: emailType === "VERIFY" ? "Лист підтвердження" : "Зміна пароля",
            text:emailType === "VERIFY" ?
`Підтвердження вашої електронної пошти на "Santehvan"

Доброго дня!
Дякуємо, що зареєструвались на нашому інтернет-магазині "Santehvan". 
Для завершення процесу реєстрації, будь ласка, підтвердьте свою електронну пошту, натиснувши на кнопку нижче:`
:
`Зміна пароля

Доброго дня!
Ми отримали запит на зміну пароля для вашого акаунту на нашому сайті. Якщо ви не робили цей запит, будь ласка, проігноруйте цей лист або зв'яжіться з нашою службою підтримки.
Щоб змінити ваш пароль, натисніть на посилання нижче:

`

,
            html: ``
        }
//
        const mailresponse = await transport.sendMail
        (mailOptions);
        return mailresponse;

    } catch (error:any) {
        throw new Error(error.message);
    }
}
