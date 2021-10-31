import {verify} from "jsonwebtoken";

const SECRET = process.env.SECRET ?? `3(?<,t2mZxj$5JT47naQFTXwqNWP#W>'*Kr!X!(_M3N.u8v}%N/JYGHC.Zwq.!v-`;  // JWT Token
export const host = process.env.riverUrl ?? `amqp://localhost`;  // RabbitMQ url

export function hasAccess(token)
{
    return verify(token, SECRET);
}