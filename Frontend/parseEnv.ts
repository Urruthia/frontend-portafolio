import { z } from "zod";

const schema = z.object({
    NEXT_STRAPI_URL: z.string(),
    NEXT_STRAPI_TOKEN: z.string(),
})

export const parsedEnv = schema.parse(process.env);