import { json } from '@sveltejs/kit';
import Mailgun from 'mailgun.js';
import FormData from 'form-data';
import {MAILGUN_API_KEY,MAILGUN_API_DOMAIN,MAIL_TO_EMAILS_1,MAIL_TO_EMAILS,MAIL_TO_EMAILS_2} from "$env/static/private";

export const POST = async({request}) => {
    const data = await request.formData();
    console.log(data);
    const mailgun = new Mailgun(FormData);
    const client = mailgun.client({username: "api", key: MAILGUN_API_KEY});
    const email = {
        from: 'harwoodwebsite@'+MAILGUN_API_DOMAIN,
        to: [MAIL_TO_EMAILS_1,MAIL_TO_EMAILS,MAIL_TO_EMAILS_2],
        subject: "A new form has been submited",
        html: `<h1>A new form has been submitted via Harwoodhouses.com please open the attachment to view the form.</h1>
            <ul>
            <li>First Name: ${data.get("firstName")}</li>
            <li>Last Name: ${data.get("lastName")}</li>
            <li>Telephone: ${data.get("telephoneNumber")}</li>
            <li>Email: ${data.get("email")}</li>
            <li>Message: ${data.get("message")}</li>
            </ul>
        
        `,
    };

    await client.messages.create(MAILGUN_API_DOMAIN,email);
    return json({
        "message": "Succesfully sent an email"
    });
};