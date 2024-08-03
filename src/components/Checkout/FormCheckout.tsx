import { useCheckoutForms } from "../../hooks/useCheckoutForms";
import { CheckoutFormSchema } from "../../schemas/checkoutFormSchema";

const FormCheckout = ({ onSubmit }: { onSubmit: (data: CheckoutFormSchema, resetForm: () => void) => void }) => {
    const { register, handleSubmit, errors, reset, setValue, trigger } = useCheckoutForms()

    const handleFormSubmit = (data: CheckoutFormSchema) => {
        onSubmit(data, reset)
    }

    function fetchAddress(zipCode: string): void {

        if (zipCode.length !== 8) {
            alert('CEP inválido! O CEP deve conter 8 dígitos')
            return
        }

        const url = `https://viacep.com.br/ws/${zipCode}/json/`
    
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro na requisição')
                }
                return response.json()
            })
            .then(data => {
                if (data.erro) {
                    alert('CEP não encontrado')
                } else {
                    setValue("streetAddress", data.logradouro || "")
                    setValue("addOnAddress", data.bairro || "")
                    setValue("city", data.localidade || "")
                    setValue("province", data.uf || "")

                    trigger(["streetAddress", "addOnAddress", "city", "province"])
                }
            })
            .catch(error => {
                console.error('Erro:', error)
                alert('Ocorreu um erro ao buscar o endereço')
            });
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            
            const zipCode = (e.target as HTMLInputElement).value
            fetchAddress(zipCode)
        }
    }
    

    return (
        <form id="checkoutForm" onSubmit={handleSubmit(handleFormSubmit)} className="mx-auto w-72 md:w-96">
            <div className="flex flex-col md:flex-row gap-5 mb-9 text-base font-poppins font-medium">
                <div className="md:w-1/2">
                    <label htmlFor="firstName">First Name</label>
                    <input 
                        type="text" 
                        id="firstName"
                        {...register("firstName")}
                        className="h-10 pl-4 border border-gray-400 rounded-md w-full mt-4"
                    />
                    {errors.firstName && (
                        <small className="text-red-500 text-xs italic">
                            {errors.firstName.message}
                        </small>
                    )}
                </div>
                <div className="md:w-1/2">
                    <label htmlFor="lastName">Last Name</label>
                    <input 
                        type="text" 
                        id="lastName"
                        {...register("lastName")}
                        className="h-10 pl-4 border border-gray-400 rounded-md w-full mt-4"
                    />
                    {errors.lastName && (
                        <small className="text-red-500 text-xs italic">
                            {errors.lastName.message}
                        </small>
                    )}
                </div>
            </div>
            <div className="flex flex-col gap-5 mb-9 text-base font-poppins font-medium">
                <label htmlFor="companyName">Company Name (Optional)</label>
                <input 
                    type="text" 
                    id="companyName"
                    {...register("companyName")}
                    className="h-10 pl-4 border border-gray-400 rounded-md"
                />
            </div>
            <div className="flex flex-col gap-5 mb-9 text-base font-poppins font-medium">
                <label htmlFor="zipCode">ZIP code</label>
                <input 
                    type="text" 
                    id="zipCode"
                    {...register("zipCode")}
                    className="h-10 pl-4 border border-gray-400 rounded-md"
                    onKeyDown={handleKeyDown}
                />
                {errors.zipCode && (
                    <small className="text-red-500 text-xs italic">
                        {errors.zipCode.message}
                    </small>
                )}
            </div>
            <div className="flex flex-col gap-5 mb-9 text-base font-poppins font-medium">
                <label htmlFor="country">Country / Region</label>
                <input 
                    type="text" 
                    id="country"
                    {...register("country")}
                    className="h-10 pl-4 border border-gray-400 rounded-md"
                />
                {errors.country && (
                    <small className="text-red-500 text-xs italic">
                        {errors.country.message}
                    </small>
                )}
            </div>
            <div className="flex flex-col gap-5 mb-9 text-base font-poppins font-medium">
                <label htmlFor="streetAddress">Street address</label>
                <input 
                    type="text" 
                    id="streetAddress"
                    {...register("streetAddress")}
                    className="h-10 pl-4 border border-gray-400 rounded-md"
                />
                {errors.streetAddress && (
                    <small className="text-red-500 text-xs italic">
                        {errors.streetAddress.message}
                    </small>
                )}
            </div>
            <div className="flex flex-col gap-5 mb-9 text-base font-poppins font-medium">
                <label htmlFor="city">Town / City</label>
                <input 
                    type="text" 
                    id="city"
                    {...register("city")}
                    className="h-10 pl-4 border border-gray-400 rounded-md"
                />
                {errors.city && (
                    <small className="text-red-500 text-xs italic">
                        {errors.city.message}
                    </small>
                )}
            </div>
            <div className="flex flex-col gap-5 mb-9 text-base font-poppins font-medium">
                <label htmlFor="province">Province</label>
                <input 
                    type="text" 
                    id="province"
                    {...register("province")}
                    className="h-10 pl-4 border border-gray-400 rounded-md"
                />
                {errors.province && (
                    <small className="text-red-500 text-xs italic">
                        {errors.province.message}
                    </small>
                )}
            </div>
            <div className="flex flex-col gap-5 mb-9 text-base font-poppins font-medium">
                <label htmlFor="addOnAddress">Add-on address</label>
                <input 
                    type="text" 
                    id="addOnAddress"
                    {...register("addOnAddress")}
                    className="h-10 pl-4 border border-gray-400 rounded-md"
                />
                {errors.addOnAddress && (
                    <small className="text-red-500 text-xs italic">
                        {errors.addOnAddress.message}
                    </small>
                )}
            </div>
            <div className="flex flex-col gap-5 mb-9 text-base font-poppins font-medium">
                <label htmlFor="email">Email address</label>
                <input 
                    type="email" 
                    id="email"
                    {...register("email")}
                    className="h-10 pl-4 border border-gray-400 rounded-md"
                />
                {errors.email && (
                    <small className="text-red-500 text-xs italic">
                        {errors.email.message}
                    </small>
                )}
            </div>
            <div className="flex flex-col gap-5 mb-12 text-base font-poppins font-medium">
                <label htmlFor="additionalInfo">Additional information</label>
                <textarea 
                    id="additionalInfo"
                    placeholder="Additional information"
                    {...register("additionalInfo")}
                    className="p-4 border border-gray-400 rounded-md"
                ></textarea>
            </div>
        </form>
    )
}

export default FormCheckout
