import { BASE_API_URL, REPOSITORY_PATH } from "$env/static/private";
import { fail } from '@sveltejs/kit';

const INCLUDE_COUNT = true;
const PAGE = 1;
const PER_PAGE = 16;

const query = `include_count=${INCLUDE_COUNT}&page=${PAGE}&per_page=${PER_PAGE}`;
const REPOSITORY_URL = `${BASE_API_URL}/${REPOSITORY_PATH}?${query}`;

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, locals, cookies }){

    /** @type {RequestInit} */
    const headers = {
        credentials: 'include',
        method: "GET",
    };
    
    if (locals.loggedIn) {
        headers.headers = {
            Authorization: `Bearer ${cookies.get("access_token")}`,
        };
    }

    const res = fetch(REPOSITORY_URL, headers)
        .then(async (res) => {
            if (!res.ok) {
                const response = await res.json();
                const errors = [];
                errors.push({ error: response.error, id: 0 });
                console.log(errors);
                return fail(400, { errors: errors });
            }

            return res.json();
        });

	return { 
        streamed: {
            repositories: res,
        }
     }
}