import { localsEs } from "./ES.js";

const localsES = {
    es: localsEs,
    en: localsES
};


export const getTranslation = (lang) => {
    return Locals[lang] || locals["es"];
}