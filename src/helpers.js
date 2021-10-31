import jwt from "jsonwebtoken";

const SECRET = process.env.SECRET ?? `3(?<,t2mZxj$5JT47naQFTXwqNWP#W>'*Kr!X!(_M3N.u8v}%N/JYGHC.Zwq.!v-`;  // JWT Token
export const host = process.env.riverUrl ?? `amqp://localhost`;  // RabbitMQ url

/**
 * Returns the token payload if its valid, otherwise it returns false.
 * @param String token 
 * @returns Promise<false|TokenData>
 */
export function getTokenData(token)
{
    return new Promise((resolve, reject) => {
        jwt.verify(token, SECRET, (err, data) => {
            if(err)
            {
                // reject(err);
                resolve(false);
            }else{
                resolve(data);
            }
        })
    });
}