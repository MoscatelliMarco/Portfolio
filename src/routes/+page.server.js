import { fail } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import { EMAIL_TO, EMAIL_FROM, EMAIL_PASSWORD } from '$env/static/private';
import { promisify } from 'util';

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: EMAIL_FROM,
        pass: EMAIL_PASSWORD
    }
})

const sendMailAsync = promisify(transporter.sendMail).bind(transporter);

export const actions = {
    contact: async ({ request }) => {
        // Get the message data
		const form_data = await request.formData();
		const name = form_data.get("name");
        const email = form_data.get("email");
        const message = form_data.get("message");

        const error = validateInput(name, email, message);

        if (error) {
            return fail(400, { error: error })
        }

        try {
            await sendMailAsync({
                from: EMAIL_FROM,
                to: EMAIL_TO,
                subject: `Portfolio - ${name} is trying to reach you`,
                text: `
                    Contact informations:
                    name - ${name}
                    email - ${email}

                    Message:
                    ${message}
                `
            })
        } catch (e) {
            return fail(500, { error: "I couldn't receive the message for an internal server error, please contact me via email to <a href='mailto:info@marcomoscatelli.com' style='text-decoration-line: underline;'>info@marcomoscatelli.it</a>" })
        }

        return { success: true }
    }
}

function validateInput(name, email, message) {
    if (name.length === 0) {
        return "Name is required";
    } else if (name.length > 50 || name.length < 4) {
        return "Name must be between 4 and 50 characters";
    } 
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.length === 0) {
        return "Email is required";
    } else if (!emailRegex.test(email)) {
        return "Invalid email address";
    } else if (email.length < 5 || email.length > 80) {
        return "Email must be between 5 and 80 characters";
    }

    if (message.length === 0) {
        return "Message is required";
    } else if (message.length < 20 || message.length > 500) {
        return "Message must be between 20 and 500 characters";
    }
}