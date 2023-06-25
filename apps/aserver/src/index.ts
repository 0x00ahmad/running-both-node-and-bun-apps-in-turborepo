import { uselessAddFunctionForTheSakeOfExample } from "@local101/logic";
import { Hono } from "hono";

const hono = new Hono({});

hono.get("/", async (c) => {
    const ans = uselessAddFunctionForTheSakeOfExample(2, 2);
    return c.json({
        message: `Hey, did you know that 2 + 2 = ${ans}. I know right?`,
    });
});
hono.get("/ping", async (c) => c.json({ message: "pong" }));

export default {
    port: 9001,
    fetch: hono.fetch,
};
