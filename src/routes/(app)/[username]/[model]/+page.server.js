import { env } from '$lib/env';
import { error } from '@sveltejs/kit';

const ACCOUNTS_URL = `${env.BASE_API_URL}/${env.ACCOUNTS_PATH}`;

export async function load({ params, fetch, cookies }){

    const postUsernameData = params.username;
    const postModelData = params.model;

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
        userRead.avatar = `${env.BASE_API_URL}/${userRead.avatar}`;
    }   

	return {postUsernameData, postModelData, userRead}
}