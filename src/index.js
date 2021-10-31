import rapid from "@ovcina/rapidriver";
import {host, getTokenData} from "./helpers.js";

// Example
async function ping(msg, publish){
    const isLoggedIn = await getTokenData(msg.token);

    publish("pong", {
        check: isLoggedIn ? true : false
    });
}

rapid.subscribe(host, "ping", ping);