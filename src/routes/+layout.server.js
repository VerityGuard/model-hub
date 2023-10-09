export const load = async ({ cookies }) => {
    const loggedIn = cookies.get("logged_in")

    return  {
        loggedIn: loggedIn === "true"
    }
};