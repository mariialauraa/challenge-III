import { useState } from "react"
import { useContactForms } from "../../hooks/useContactForms"
import { ContactFormSchema } from "../../schemas/contactFormSchema"

const FormContact = () => {
    const { register, handleSubmit, errors, reset } = useContactForms()
    const [formSubmit, setFormSubmit] = useState(false)

    const onSubmit = (data: ContactFormSchema) => {
        console.log(data)
        reset()
        setFormSubmit(true)

        setTimeout(() => setFormSubmit(false), 3000)
    }

  return (
    <div className="mx-auto w-72 md:w-96">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-5 mb-9 text-base font-poppins font-medium">
                <label htmlFor="name">Your name</label>
                <input 
                    type="text" 
                    id="name"
                    placeholder="Abc"
                    {...register("name")}
                    className="h-10 pl-4 border border-gray-400 rounded-md"
                />
                {errors.name && (<small className="text-red-500 text-xs italic
                ">
                    {errors.name.message}
                </small>)}
            </div>
            <div className="flex flex-col gap-5 mb-9 text-base font-poppins font-medium">
                <label htmlFor="name">Email address</label>
                <input 
                    type="email" 
                    id="email"
                    placeholder="Abc@def.com"
                    {...register("email")}
                    className="h-10 pl-4 border border-gray-400 rounded-md"
                />
                {errors.email && (<small className="text-red-500 text-xs italic">
                    {errors.email.message}
                </small>)}
            </div>
            <div className="flex flex-col gap-5 mb-9 text-base font-poppins font-medium">
                <label htmlFor="name">Subject</label>
                <input 
                    type="text" 
                    id=""
                    placeholder="This is an optional"
                    {...register("subject")}
                    className="h-10 pl-4 border border-gray-400 rounded-md"
                />
            </div>
            <div className="flex flex-col gap-5 mb-12 text-base font-poppins font-medium">
                <label htmlFor="name">Message</label>
                <textarea 
                    id="message"
                    placeholder="Hi! i’d like to ask about"
                    {...register("message")}
                    className="h-10 p-4 border border-gray-400 rounded-md min-h-28"
                ></textarea>
                {errors.message && (<small className="text-red-500 text-xs italic">
                    {errors.message.message}
                </small>)}
            </div>
            <div className="flex justify-center md:justify-start">
                <button 
                    type="submit"
                    className="w-48 h-12 my-2 rounded-md bg-[#B88E2F] hover:bg-[#c7982a] text-white font-normal font-poppins text-base transition-all"
                >
                    Submit
                </button>
            </div>
        </form>
        <div className="mx-auto">
            {formSubmit && (
                <div className="mb-4 p-4 text-[#B88E2F] bg-[#F9F1E7] rounded-md">
                    Formulário enviado com sucesso!
                </div>
            )}
        </div>
    </div>
  )
}

export default FormContact