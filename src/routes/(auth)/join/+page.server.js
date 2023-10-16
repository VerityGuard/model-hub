import { fail, redirect } from '@sveltejs/kit';
import { env } from '$lib/env';
import parseCookie from '../../../utils/parseCookie';

const REGISTER_URL = `${env.BASE_API_URL}/${env.REGISTER_PATH}`;

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ locals }) => {
    if (locals.loggedIn) {
        throw redirect(301, '/');
    }
};

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, request, url, fetch }) => {
        let formData = await request.formData();
    
        const res = await fetch(REGISTER_URL, {
            body: formData,
            credentials: 'include',
            method: "POST",
        });

        if (!res.ok) {
            const response = await res.json();
            const errors = [];
            errors.push({ error: response.error, id: 0 });
            return fail(400, { errors: errors });
        }
           
        const cookieResponse= res.headers.get("set-cookie");
        if (cookieResponse) {
            const cookieParsed = parseCookie(cookieResponse);
            
            cookieParsed.forEach(cookie => {
                cookies.set(cookie.name, cookie.value, cookie.options);
            });
        }

        throw redirect(301, url.searchParams.get('rext') || '/');
    },
};