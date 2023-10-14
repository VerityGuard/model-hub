import { env } from "$lib/env";

const PROFILE_URL = `${env.BASE_API_URL}/${env.PROFILE_PATH}`;

export const load = async ({ cookies }) => {
    const loggedIn = cookies.get("logged_in") === "true";
    let user = null;

    if (loggedIn) {
        user = await fetch(PROFILE_URL, {
            headers: {
                Authorization: `Bearer ${cookies.get("access_token")}`,
            },
            credentials: 'include',
            method: "GET",
        }).then(res => res.json());
        user.avatar = `${env.BASE_API_URL}/${user.avatar}`;
    }


    return  {
        loggedIn: loggedIn,
        user: user
    }
};