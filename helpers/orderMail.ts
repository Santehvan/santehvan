import nodemailer from 'nodemailer';
import bcryptjs from 'bcryptjs';
import User from '@/lib/models/user.model';
import { useToast } from "@/components/ui/use-toast"

export const orderMail = async({orderId}:any) => {
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
            <h1 style="font-family: sans-serif; margin-bottom:15px;">Нове замовлення було створене !</h1>
            <a style=" font-weight: bold; font-family: sans-serif;  color: #fff; text-decoration: none; background-color: #000; padding: 15px 30px; border-radius: 8px;" href="${process.env.DOMAIN}/${orderId}";>Переглянути </a>
            <p style="font-family: sans-serif; padding:35px;>Натисніть на кнопку вище, щоб переглянути деталі замовлення</p>
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
