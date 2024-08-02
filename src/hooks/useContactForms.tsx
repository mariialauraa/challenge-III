import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ContactFormSchema, contactFormSchema } from "../schemas/contactFormSchema";

export const useContactForms = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm<ContactFormSchema>({
        resolver: zodResolver(contactFormSchema)
    })

    return { register, handleSubmit, errors, reset }
}