import ratelimit from "../config/upstash.js";

const rateLimiter = async (req,res,next) =>{
    try {
        // ? instead of my-limit-key we use userid so every user has their own ratelimit
        // ? if john gets rate limited it should not affect jane
        const {success} = await ratelimit.limit("my-limit-key");

        if(!success){
            return res.status(429).json({
                message:"Too many requests, please try again later."
            })
        }

        next();
    } catch (error) {
        console.log("Rate limit error",error);
        next(error);
    }
}

export default rateLimiter;