export default function getPlaceholderInitials(/**@type {string} */ name) {
    return name.trim().split(" ").map((/**@type {string} */ n, /**@type {number} */ index, /**@type {Array<string>} */ array) => {
        if (index === 0 || index === array.length - 1) {
            return n[0].toUpperCase();
        } else {
            return "";
        }
    }).join("");
}