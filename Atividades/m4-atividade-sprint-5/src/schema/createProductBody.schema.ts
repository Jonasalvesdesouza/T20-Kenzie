import { object, z } from "zod"

export const createProductBodySchema = z.object({
    name: z.string().min(2),
    description: z.string().max(250),
    category: z.string().optional(),
    price: z.number().min(0.01)
})

createProductBodySchema.parse(object)