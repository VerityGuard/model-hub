import { env } from "$lib/env";
import { fail, redirect } from "@sveltejs/kit";

const LOGOUT_URL = `${env.BASE_API_URL}/${env.LOGOUT_PATH}`;

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	// redirect user if not logged in
	if (!locals.loggedIn) {
		throw redirect(301, `/login`);
	}
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, url, locals, fetch }) => {
        if (locals.loggedIn) {

            const body = JSON.stringify({refresh_token: cookies.get("refresh_token")});

            const res = await fetch(LOGOUT_URL, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${cookies.get("access_token")}`,
                },
                body: body,
                credentials: 'include',
                method: "POST",
            });

            console.log(LOGOUT_URL);

            if (!res.ok) {
                const response = await res.json();
                const errors = [];
                errors.push({ error: response.error, id: 0 });
                return fail(400, { errors: errors });
            }
            
            cookies.delete("logged_in", { path: '/' });
            cookies.delete("access_token", { path: '/' });
            cookies.delete("refresh_token", { path: '/' });

            throw redirect(301, url.searchParams.get('rext') || '/');
        }
    }
};
