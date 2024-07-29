import { z } from 'zod'

export const checkoutFormSchema = z.object({
    firstName: z.string().min(1, "O campo é obrigatório."),
    lastName: z.string().min(1, "O campo é obrigatório."),
    companyName: z.string(),
    zipCode: z.string().min(1, "O campo é obrigatório."),
    country: z.string().min(1, "O campo é obrigatório."),
    streetAddress: z.string().min(1, "O campo é obrigatório."),
    city: z.string().min(1, "O campo é obrigatório."),
    province: z.string().min(1, "O campo é obrigatório."),
    addOnAddress: z.string().optional(),
    email: z.string().min(1, "O campo é obrigatório.").email("Utilize um e-mail válido."),
    additionalInfo: z.string()
});

export type CheckoutFormSchema = z.infer<typeof checkoutFormSchema>;
