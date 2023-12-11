import { BASE_API_URL } from '$env/static/private';

/** @type {import('./$types').LayoutServerLoad} */
export const load = async ({ locals }) => {
    return  {
        loggedIn: locals.loggedIn,
        user: locals.user,
        base_api_url: BASE_API_URL,
    }
};