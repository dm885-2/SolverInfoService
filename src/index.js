import river from "@ovcina/rapidriver";
import {host, hasAccess} from "./helpers";

// Example
river.subscribe(host, "ping", (msg, publish) => {
    const isLoggedIn = hasAccess(msg.token);

    publish("pong", {
        check: isLoggedIn
    });
});