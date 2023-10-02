import { redirect } from "@sveltejs/kit";

export const load = async ({ cookies }) => {
    const sessionId = cookies.get("sessionId");
  
    if (sessionId) {
      throw redirect(301, "/");
    }
};
  
export const actions = {
    login: async ({ cookies, request, url }) => {
        const data = await request.formData();
        const username = data.get('username');
        const password = data.get('password');

        const body = await JSON.stringify({username, password})

        if (url.searchParams.has('redirectTo')) {
            throw redirect(301, url.searchParams.get('redirectTo'));
        }

        /*
        const res = await fetch('', {
            body,
            method: "POST",
            headers: { "content-type": "application/json" },
        });

        if (res.ok) {

            const sessionId = res.headers.get("Authorization");

            cookies.set("sessionId", sessionId?.split("Bearer ")[1] ?? "", {
                path: "/",
            });
      
            if (url.searchParams.has('redirectTo')) {
                throw redirect(301, url.searchParams.get('redirectTo'));
            }

            return {
                status: 200,
                body: { message: "Login was completed successfully." },
            }
        }
        
        return {
            error: await res.text(),
        };
        */
    }
};