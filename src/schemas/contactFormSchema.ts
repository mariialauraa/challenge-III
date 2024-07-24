import {z} from 'zod'

export const contactFormSchema = z.object({
    name: z.string().min(1, "O campo é obrigatório."),
    email: z.string().min(1, "O campo é obrigatório.").email("Utilize um e-mail válido."), 
    subject: z.string(),
    message: z.string().min(1, "O campo é obrigatório.")
})

export type ContactFormSchema = z.infer<typeof contactFormSchema>