import { goto } from "$app/navigation";

/**
 * @param {string} route
 * @param {boolean} replaceState
 */
function routeToPage(route = '', replaceState = false) {
    goto(`/${route}`, { replaceState }) 
}

export { routeToPage }