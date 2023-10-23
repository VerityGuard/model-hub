import { fail, redirect } from '@sveltejs/kit';
import { BASE_API_URL, REGISTER_PATH } from '$env/static/private';
import parseCookie from '../../../utils/parseCookie';

const REGISTER_URL = `${BASE_API_URL}/${REGISTER_PATH}`;

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
            console.log(errors);
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