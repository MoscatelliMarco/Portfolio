import { fail } from '@sveltejs/kit';

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

        // TODO add code to send email to mine using nodemailer
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
    } else if (!emailRegex.test(input)) {
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