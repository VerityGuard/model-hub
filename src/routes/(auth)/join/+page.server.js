import { redirect } from '@sveltejs/kit';

import { env } from '../../../lib/env';

const REGISTER_URL = `${env.BASE_API_URL}/${env.REGISTER_PATH}`

export const actions = {
    join: async ({ cookies, request, url }) => {
        const data = await request.formData();
        const step = parseInt(data.get('step'), 10);
  
        let formData = {}

        if (step === 1) {
            const email = data.get('email');
            const password = data.get('password');

            formData = {
                email,
                password
            };
        
            return {
                status: 200,
                body: { message: "Step 1 data received and processed successfully." },
            };
        } else if (step === 2) {
            const username = data.get('username');
            const name = data.get('name');
            const avatar = data.get('avatar');
            const github = data.get('github');
            const twitter = data.get('twitter');
            const homepage = data.get('homepage');
        
            formData = {
                ...formData, username, name, avatar, github, twitter, homepage
            };

            const body = JSON.stringify(formData)

            const res = await fetch(REGISTER_URL, {
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
                    body: { message: "Step 2 data received and processed successfully." },
                };
            }
            
            return {
                status: res.status,
                error: await res.text(),
            };
        } else {

            return {
                status: 400,
                body: { error: "Invalid step value." },
            };
        }
    },
};