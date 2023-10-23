import { BASE_API_URL, ACCOUNTS_PATH } from "$env/static/private";
import { error } from '@sveltejs/kit';

const ACCOUNTS_URL = `${BASE_API_URL}/${ACCOUNTS_PATH}`;

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, fetch, cookies }){

    const postUsernameData = params.username;
    const RELATIVE_ACCOUNTS_URL = `${ACCOUNTS_URL}/${postUsernameData}`;

    const res = await fetch(RELATIVE_ACCOUNTS_URL, {
        headers: {
            Authorization: `Bearer ${cookies.get("access_token")}`,
        },
        credentials: 'include',
        method: "GET",
    });

    if (!res.ok) {
        const response = await res.json();
        throw error(404, response.detail);
    }

    const userRead = await res.json();

    if (userRead.avatar) {
        userRead.avatar = `${BASE_API_URL}/${userRead.avatar}`;
    }   

	return {postUsernameData, userRead}
}