import { json } from '@sveltejs/kit';
import Mailgun from 'mailgun.js';
import FormData from 'form-data';
import {MAILGUN_API_KEY,MAILGUN_API_DOMAIN,MAIL_TO_EMAILS_1,MAIL_TO_EMAILS,MAIL_TO_EMAILS_2} from "$env/static/private";

export const POST = async({request}) => {
    const data = await request.formData();
    // Convert FormData to a plain object for easier iteration
    const entries = Array.from(data.entries());
    const mailgun = new Mailgun(FormData);
    const client = mailgun.client({username: "api", key: MAILGUN_API_KEY});

    // Build HTML with all fields
    let html = `<h1>A new form has been submitted via Harwoodhouses.com</h1><ul>`;
    for (const [key, value] of entries) {
      html += `<li><strong>${key}:</strong> ${value}</li>`;
    }
    html += `</ul>`;

    const email = {
        from: 'harwoodwebsite@'+MAILGUN_API_DOMAIN,
        to: [MAIL_TO_EMAILS_1,MAIL_TO_EMAILS,MAIL_TO_EMAILS_2],
        subject: "A new form has been submitted",
        html
    };

    await client.messages.create(MAILGUN_API_DOMAIN,email);
    return json({
        "message": "Successfully sent an email"
    });
};