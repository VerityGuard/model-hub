import { BASE_API_URL, ACCOUNTS_PATH, MODEL_PATH, MODEL_UPLOAD_PATH } from "$env/static/private";
import { error, fail } from '@sveltejs/kit';

const MODEL_UPLOAD_URL = `${BASE_API_URL}/${MODEL_UPLOAD_PATH}`;
const MODEL_URL = `${BASE_API_URL}/${MODEL_PATH}`;

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, fetch, cookies }){

    const username = params.username;
    const modelName = params.model;

    const USER_MODEL_URL = `${MODEL_URL}/${username}/${modelName}`;

    const res = await fetch(USER_MODEL_URL, {
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

    const model = await res.json();

    if (model.owner.avatar) {
        model.owner.avatar = `${BASE_API_URL}/${model.owner.avatar}`;
    }   

	return {model}
}

/** @type {import('./$types').Actions} */
export const actions = {
    upload: async ({ cookies, request, fetch }) => {
        let formData = await request.formData();
        
        const res = await fetch(MODEL_UPLOAD_URL, {
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