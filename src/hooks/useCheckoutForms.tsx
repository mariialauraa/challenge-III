import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CheckoutFormSchema, checkoutFormSchema } from "../schemas/checkoutFormSchema";

export const useCheckoutForms = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CheckoutFormSchema>({
        resolver: zodResolver(checkoutFormSchema)
    })

    return { register, handleSubmit, errors }
}