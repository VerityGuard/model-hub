import { BASE_API_URL, ACCOUNTS_PATH, REPOSITORY_UPLOAD_PATH } from "$env/static/private";
import { error, fail } from '@sveltejs/kit';

const ACCOUNTS_URL = `${BASE_API_URL}/${ACCOUNTS_PATH}`;

const REPOSITORY_UPLOAD_URL = `${BASE_API_URL}/${REPOSITORY_UPLOAD_PATH}`;

/** @type {import('./$types').PageServerLoad} */
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
        userRead.avatar = `${BASE_API_URL}/${userRead.avatar}`;
    }   

	return {postUsernameData, postModelData, userRead}
}

/** @type {import('./$types').Actions} */
export const actions = {
    upload: async ({ cookies, request, fetch }) => {
        let formData = await request.formData();
        
        const res = await fetch(REPOSITORY_UPLOAD_URL, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${cookies.get("access_token")}`,
            },
            body: formData,
        });

        
        if (!res.ok) {
            const response = await res.json();
            const errors = [];
            errors.push({ error: response.error, id: 0 });
            console.log(errors);
            return fail(400, { errors: errors });
        }

        return {
            status: res.status,
            body: await res.json(),
        };
    },
};