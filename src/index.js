import rapid from "@ovcina/rapidriver";
import {host, getTokenData, subscriber} from "./helpers.js";

// Example
export async function ping(msg, publish, publishGlobal){
    const isLoggedIn = await getTokenData(msg.token);

    publish("pong", {
        check: isLoggedIn ? true : false
    });
}

if(process.env.RAPID)
{
    subscriber(host, [{river: "template", event: "ping", work: ping}]);
}
