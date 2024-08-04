import nodemailer from 'nodemailer';
import bcryptjs from 'bcryptjs';
import User from '@/lib/models/user.model';
import { useToast } from "@/components/ui/use-toast"

export const sendEmail = async({email, emailType, userId}:any) => {
    try {
        // create a hased token
        const hashedToken = await bcryptjs.hash(userId.toString(), 10)

        if (emailType === "VERIFY") {
            await User.findByIdAndUpdate(userId, 
                {verifyToken: hashedToken, verifyTokenExpiry: Date.now() + 3600000})
        } else if (emailType === "RESET"){
            await User.findByIdAndUpdate(userId, 
                {forgotPasswordToken: hashedToken, forgotPasswordTokenExpiry: Date.now() + 3600000})
        }

        var transport = nodemailer.createTransport({
          host: "live.smtp.mailtrap.io",
          port: 587,
          auth: {
            user: "api",
            pass: "3a37c2d40a132e125065bef93fb2207d"
          }
        });

        const mailOptions = {
            from: 'info@santehvan.com',
            to: email,
            subject: emailType === "VERIFY" ? "Лист підтвердження" : "Зміна пароля",
            text:'',
            html:  emailType === "VERIFY" ? 
                `
            <h1 style="font-family: sans-serif;">Вітаємо в Santehvan !</h1>
            <div style="font-size: 18px; padding-bottom: 40px; font-family: sans-serif;">
                <p>Вітаємо Вас у нашій спільноті! Ваша реєстрація успішно завершена. Тепер Ви маєте доступ до всіх переваг нашого магазину, включаючи:</p>
                <ol>
                    <li>Широкий асортимент якісної сантехніки.</li>
                    <li>Спеціальні пропозиції та знижки для зареєстрованих користувачів.</li>
                    <li>Можливість створювати списки бажань та порівнювати товари.</li> 
                    <li>Оперативну підтримку від нашої команди.</li>
                </ol>
                <p>Для завершення реєстрації, будь ласка, підтвердіть свою електронну адресу, натиснувши на посилання нижче:</p>
            </div>
            
            <a style=" font-weight: bold; font-family: sans-serif;  color: #fff; text-decoration: none; background-color: #000; padding: 15px 30px; border-radius: 8px;" href="${process.env.DOMAIN}/${emailType === "VERIFY" ? `verifyemail?token=${hashedToken}` : `newPass?token=${hashedToken}`}";>Підтвердити</a>
              <div style="font-size: 18px; padding-bottom: 40px; font-family: sans-serif;">
                    <p style="padding-top: 40px;">Якщо Ви не реєструвалися в нашому магазині, будь ласка, проігноруйте цей лист.</p>
                    <p>Якщо у Вас виникли питання або потребуєте допомоги, не вагайтеся звернутися до нашої служби підтримки за електронною адресою <a href="mail:santehvan@gmail.com" style="color: #000;">santehvan@gmail.com</a></p>
                    <p>Дякуємо, що обрали SantehVan!</p>
                    <p>З найкращими побажаннями, <br>
                        Команда SantehVan</p>
                </div>
            `
                
                :
                    `
            <h1 style="font-family: sans-serif;">Зміна пароля</h1>
            <div style="font-size: 18px; padding-bottom: 40px; font-family: sans-serif;">
                <p>Вітаємо Вас у нашій спільноті! Ваша реєстрація успішно завершена. Тепер Ви маєте доступ до всіх переваг нашого магазину, включаючи:</p>
                <ol>
                    <li>Широкий асортимент якісної сантехніки.</li>
                    <li>Спеціальні пропозиції та знижки для зареєстрованих користувачів.</li>
                    <li>Можливість створювати списки бажань та порівнювати товари.</li> 
                    <li>Оперативну підтримку від нашої команди.</li>
                </ol>
                <p>Для завершення реєстрації, будь ласка, підтвердіть свою електронну адресу, натиснувши на посилання нижче:</p>
            </div>
            
            <a style=" font-weight: bold; font-family: sans-serif;  color: #fff; text-decoration: none; background-color: #000; padding: 15px 30px; border-radius: 8px;" href="${process.env.DOMAIN}/${emailType === "VERIFY" ? `verifyemail?token=${hashedToken}` : `newPass?token=${hashedToken}`}";>Підтвердити</a>
              <div style="font-size: 18px; padding-bottom: 40px; font-family: sans-serif;">
                    <p style="padding-top: 40px;">Якщо Ви не реєструвалися в нашому магазині, будь ласка, проігноруйте цей лист.</p>
                    <p>Якщо у Вас виникли питання або потребуєте допомоги, не вагайтеся звернутися до нашої служби підтримки за електронною адресою <a href="mail:santehvan@gmail.com" style="color: #000;">santehvan@gmail.com</a></p>
                    <p>Дякуємо, що обрали SantehVan!</p>
                    <p>З найкращими побажаннями, <br>
                        Команда SantehVan</p>
                </div>
            `    
            ,
        }

//
        const mailresponse = await transport.sendMail
        (mailOptions);
        return mailresponse;

    } catch (error:any) {
        throw new Error(error.message);
    }
}
