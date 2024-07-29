import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig.ts';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo_furniro.svg';

const registerFormSchema = z.object({
    name: z.string().min(1, "O campo é obrigatório."),
    email: z.string().min(1, "O campo é obrigatório.").email("Utilize um e-mail válido."),
    password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres")
});

type RegisterFormInputs = z.infer<typeof registerFormSchema>

export function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormInputs>({
        resolver: zodResolver(registerFormSchema),
    })
    const [error, setError] = useState<string | null>(null)
    const navigate = useNavigate()

    const handleRegister: SubmitHandler<Omit<RegisterFormInputs, 'name'>> = async ({ email, password }) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            alert('Usuário registrado com sucesso!')
            setError(null)
            navigate('/login')

        } catch (error) {
            if (error instanceof Error) {
                setError(error.message)
                alert(error.message)
            } else {
                setError('Erro desconhecido')
                alert('Erro desconhecido. Tente novamente!')
            }
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <div className='mx-auto max-w-md p-4 flex flex-col items-center'>
                <img src={Logo} alt="Logo" className='mb-4'/>
                <h2 className="mb-4 text-center text-lg font-medium font-poppins">
                    Cadastro
                </h2>

                <form onSubmit={handleSubmit(handleRegister)} className="bg-white p-6 rounded-lg shadow-md font-poppins">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium">Nome</label>
                        <input
                        type="text"
                        id="name"
                        placeholder="Digite o nome"
                        {...register("name")}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        />
                        {errors.name && <span className="text-red-500 text-xs">{errors.name?.message}</span>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium">E-mail</label>
                        <input
                        type="email"
                        id="email"
                        placeholder="Digite o email"
                        {...register("email")}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        />
                        {errors.email && <span className="text-red-500 text-xs">{errors.email?.message}</span>}
                    </div>
                
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium">Senha</label>
                        <input
                        type="password"
                        id="password"
                        placeholder="Digite a senha"
                        {...register("password")}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        />
                        {errors.password && <span className="text-red-500 text-xs">{errors.password?.message}</span>}
                    </div>
                
                    <button type="submit" className="w-full mt-4 p-2 bg-[#B88E2F] text-white rounded-md hover:bg-[#c7982a]">
                        Cadastrar
                    </button>
                    {error && <div className="error-message mt-2 text-red-500 text-sm">{error}</div>}
                    
                    <div className="mt-4 text-center">
                        <p className="text-sm">Já tem uma conta?</p>
                        <Link to="/login" className="text-sm text-[#B88E2F] hover:underline">Acesse sua conta aqui</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}