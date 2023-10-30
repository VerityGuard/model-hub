import { fail, redirect } from "@sveltejs/kit";
import { BASE_API_URL, LOGIN_PATH } from "$env/static/private";
import parseCookie from "../../../utils/parseCookie";

const LOGIN_URL = `${BASE_API_URL}/${LOGIN_PATH}`;

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ locals }) => {
    if (locals.loggedIn && locals.user) {
        throw redirect(301, `/${locals.user.username}`);
    }
};

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, request, url, fetch }) => {
        const formData = await request.formData();

        const res = await fetch(LOGIN_URL, {
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
    }
};
