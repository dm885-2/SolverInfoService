import {ping} from "./index.js";

test('ping responds with pong', async () => {
    ping({token: "",}, (channel, message) => {
        expect(channel).toBe("pong");
    });
});