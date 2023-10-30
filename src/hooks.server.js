import { BASE_API_URL, PROFILE_PATH, REGISTER_PATH } from '$env/static/private';

const PROFILE_URL = `${BASE_API_URL}/${PROFILE_PATH}`;
const REFRESH_URL = `${BASE_API_URL}/${REGISTER_PATH}`;

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	if (event.locals.user) {
		// if there is already a user in session load page as normal
		return await resolve(event);
	}
	// get cookies from browser
    const loggedIn = event.cookies.get("logged_in") === "true";

	if (!loggedIn) {
		// if there is no session load page as normal
		return await resolve(event);
	}

	// find the user based on the token
    const res = await fetch(PROFILE_URL, {
        headers: {
            Authorization: `Bearer ${event.cookies.get("access_token")}`,
        },
        credentials: 'include',
        method: "GET",
    });


	if (!res.ok) {
		// if there is no session load page as normal

		// const rres = await fetch(`${REFRESH_URL}`, {
		// 	headers: {
		// 		Authorization: `Bearer ${event.cookies.get("access_token")}`,
		// 	},
		// 	body: JSON.stringify({
		// 		refresh_token: event.cookies.get("refresh_token"),
		// 		grant_type: "refresh_token",
		// 	}),
		// 	credentials: 'include',
		// 	method: "POST",
		// });

		return await resolve(event);
	}

	// if `user` exists set `events.local`
	const response = await res.json();

    event.locals.loggedIn = true;

	event.locals.user = response;
	if (event.locals.user.avatar) {
        event.locals.user.avatar = `${BASE_API_URL}/${event.locals.user.avatar}`;
	}

	// load page as normal
	return await resolve(event);
}