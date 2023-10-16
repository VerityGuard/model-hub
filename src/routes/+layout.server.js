/** @type {import('./$types').LayoutServerLoad} */
export const load = async ({ locals }) => {
    return  {
        loggedIn: locals.loggedIn,
        user: locals.user,
    }
};