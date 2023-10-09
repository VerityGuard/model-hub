import { redirect } from "@sveltejs/kit";
import { env } from '../../../lib/env';
import camelize from "../../../utils/camalize";

const LOGIN_URL = `${env.BASE_API_URL}/${env.LOGIN_PATH}`

export const load = async ({ cookies }) => {
    const loggedIn = cookies.get("logged_in")

    if (loggedIn) {
        throw redirect(301, '/me')
    }
};
  
export const actions = {
    default: async ({ cookies, request, url }) => {
        const formData = await request.formData();
        
        const res = await fetch(LOGIN_URL, {
            body: formData,
            credentials: 'include',
            method: "POST",
        });

        if (res.ok) {            
            const cookieResponse= res.headers.get("set-cookie");
            if (cookieResponse) {
                const cookiesString = cookieResponse.replace("Response Cookies: ", "");
                const cookiesArray = cookiesString.split(', ');

                cookiesArray.forEach(cookie => {
                    const cookieParts = cookie.split('; ');
                  
                    const [name, value] = cookieParts[0].split('=');
   
                    const options = {};
                  
                    for (let i = 1; i < cookieParts.length; i++) {
                      const [attrName, attrValue] = cookieParts[i].split('=');
                      options[camelize(attrName)] = attrValue || true;
                    }

                    console.log(options)
                  
                    cookies.set(name, value, options);
                  });

            }
            
            if (url.searchParams.has('redirectTo')) {
                throw redirect(301, url.searchParams.get('redirectTo') || '/');
            }

            return {
                status: 200,
                body: { message: "Login was completed successfully." },
            };
        }
        
        return {

            error: await res.text(),
        };
    }
};
