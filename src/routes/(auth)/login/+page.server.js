import { redirect } from "@sveltejs/kit";

import { env } from '../../../lib/env';

const LOGIN_URL = `${env.BASE_API_URL}/${env.LOGIN_PATH}`

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
        
        const res = await fetch(LOGIN_URL, {
            body,
            method: "POST",
            headers: { "content-type": "application/json" },
        });

        if (res.ok) {

            // store token
      
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
    }
};