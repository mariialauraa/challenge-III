import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import useAuth from '../../hooks/useAuth';
import Logo from '../../assets/logo_furniro.svg';

const loginFormSchema = z.object({
    email: z.string().min(1, "O campo é obrigatório.").email("Utilize um e-mail válido."),
    password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres")
});

type LoginFormInputs = z.infer<typeof loginFormSchema>;

export function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>({
        resolver: zodResolver(loginFormSchema),
    });
    const { login, error } = useAuth();

    const handleLogin: SubmitHandler<LoginFormInputs> = async ({ email, password }) => {
        await login(email, password);
    }

    return (
      <div className='flex justify-center items-center min-h-screen bg-gray-50'>
          <div className="mx-auto max-w-md p-4 flex flex-col items-center">
              <img src={Logo} alt="Logo" className='mb-4'/>
              <h2 className="mb-4 text-center text-lg font-medium font-poppins">
                  Login
              </h2>

              <form onSubmit={handleSubmit(handleLogin)} className="bg-white p-6 rounded-lg shadow-md font-poppins">
                  <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium">E-mail</label>
                      <input
                      type="text"
                      id="email"
                      placeholder="Digite o email"
                      {...register("email")}
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                      />
                      {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
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
                      {errors.password && <span className="text-red-500 text-xs">{errors.password.message}</span>}
                  </div>

                  <button type="submit" className="w-full mt-4 p-2 bg-[#B88E2F] text-white rounded-md hover:bg-[#c7982a]">
                      Entrar
                  </button>
                  {error && <div className="error-message mt-2 text-red-500 text-sm">{error}</div>}

                  <div className="mt-4 text-center">
                      <p className="text-sm">Você não tem uma conta?</p>
                      <Link to="/register" className="text-sm text-[#B88E2F] hover:underline">Crie a sua conta aqui</Link>
                  </div>
              </form>
          </div>
      </div>
    );
}
