import nodemailer from 'nodemailer';
import bcryptjs from 'bcryptjs';
import User from '@/lib/models/user.model';
import { useToast } from "@/components/ui/use-toast"

export const orderMail = async(orderId:any) => {
    try {
       
        

        
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
            to: 'santehvan@gmail.com',
            subject: `Нове замовлення ! № ${orderId}`,
            text:'',
            html: 
            `
            <h1 style="font-family: sans-serif; margin-bottom:75px;">Нове замовлення було створене !</h1>
            <a style=" font-weight: bold; font-family: sans-serif;  color: #fff; text-decoration: none; background-color: #000; padding: 15px 30px; border-radius: 8px;" href="${process.env.DOMAIN}/admin/Orders/${orderId}";>Переглянути </a>
           <div style="font-size: 18px; padding-bottom: 40px; font-family: sans-serif;">
                    <p style="padding-top: 40px;">Натисніть на кнопку вище щоб переглянути деталі замовлення.</p>
                    <p>Якщо кнопка не спацювала перевірте замовлення в адмін панелі</a></p>
                    <p>Дякуємо, що обрали SantehVan!</p>
                   
                </div>
            `
        }


        
//
        const mailresponse = await transport.sendMail
        (mailOptions);
        return mailresponse;

    } catch (error:any) {
        throw new Error(error.message);
    }
}
