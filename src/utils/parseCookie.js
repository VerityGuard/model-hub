import camelize from "./camalize";

export default function parseCookie(cookieResponse) {
    const cookiesString = cookieResponse.replace("Response Cookies: ", "");
    const cookiesArray = cookiesString.split(', ');

    const cookieParsed = cookiesArray.map((cookie) => {
        const cookieParts = cookie.split('; ');
          
        const [name, value] = cookieParts[0].split('=');

        let options = {};

        for (let i = 1; i < cookieParts.length; i++) {
            const [attrName, attrValue] = cookieParts[i].split('=');
            options[camelize(attrName)] = attrValue || true;
        }

        return {
            name,
            value,
            options,
        }
    });

    return cookieParsed;

}