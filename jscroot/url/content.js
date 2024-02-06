//lib call
import {getHash} from "https://cdn.jsdelivr.net/gh/jscroot/url@0.0.2/croot.js";
//internal call
import { url } from "./config.js";

export function getContentURL(){
    let hashlink=getHash();
    switch (hashlink) {
        case "home":
            return url.template.content+"home.html";
        case "profile/passwords":
            return url.template.content+"profile/passwords.html";
        case "profile/mail":
            return url.template.content+"profile/mail.html";
        case "profile/accounts":
            return url.template.content+"profile/accounts.html";
        case "messages":
            return url.template.content+"messages.html";
        case "tugas/chap01":
                return url.template.content+"tugas/chap01/index.html";
        case "tugas/chap02":
                return url.template.content+"tugas/chap02/index.html";
        case "tugas/chap03":
                return url.template.content+"tugas/chap03/index.html";
        case "tugas/chap04":
                return url.template.content+"tugas/chap04/index.html";
        case "tugas/chap05":
                return url.template.content+"tugas/chap05.html";
        case "notifications/blocked":
            return url.template.content+"notifications/blocked.html";
        case "notifications/silenced":
            return url.template.content+"notifications/silenced.html";
        case "notifications/publish":
            return url.template.content+"notifications/publish.html";
        case "notifications/program":
            return url.template.content+"notifications/program.html";
        case "swagger":
            return url.template.content+"swagger.js";
        case "swagger":
            return url.template.content+"swaggerfunction.js";
            // case "explore":
        //     return url.template.content+"explore.html";
        // case "saved":
        //     return url.template.content+"saved.html";
        case "logout":
            return url.template.content+"logout.html";
        case "map":
            return url.template.content+"map.html";
        default:
            return url.template.content+"home.html";
    }

}



export function getURLContentJS(){
    let hashlink=getHash();
    switch (hashlink) {
        case "home":
            return url.view.content+"home.js";
        case "profile/passwords":
            return url.view.content+"profile/passwords.js";
        case "profile/mail":
            return url.view.content+"profile/mail.js";
        case "profile/accounts":
            return url.view.content+"profile/accounts.js";
        case "messages":
            return url.view.content+"messages.js";
        case "notifications/blocked":
            return url.view.content+"notifications/blocked.js";
        case "notifications/silenced":
            return url.view.content+"notifications/silenced.js";
        case "notifications/publish":
            return url.view.content+"notifications/publish.js";
        case "notifications/program":
            return url.view.content+"notifications/program.js";
        case "explore":
            return url.view.content+"explore.js";
        case "saved":
            return url.view.content+"saved.js";
        case "logout":
            return url.view.content+"logout.js";
        case "map":
            return url.view.content+"map.js";
        default:
            return url.view.content+"home.js";
    }

}