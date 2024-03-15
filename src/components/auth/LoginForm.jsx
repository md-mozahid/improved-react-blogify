import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { axiosInstance } from '../../api'
import { useAuth } from '../../hooks'
import Field from '../shared/Field'

export default function LoginForm() {
  const navigate = useNavigate()
  const { setAuth } = useAuth()
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm()

  const loginFormSubmit = async (formData) => {
    try {
      const response = await axiosInstance.post('/auth/login', formData)
      if (response.status === 200) {
        const { token, user } = response.data
        const authToken = token.accessToken
        const refreshToken = token.refreshToken
        setAuth({ user, authToken, refreshToken })
        toast.success('Login successful')
        navigate('/')
      }
    } catch (error) {
      console.error(error)
      setError('root.random', {
        type: 'random',
        message: `User with email ${formData.email} is not found`,
      })
    }
  }

  return (
    <section className="container">
      <div className="w-full md:w-1/2 mx-auto bg-[#030317] p-8 rounded-md mt-12">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form onSubmit={handleSubmit(loginFormSubmit)}>
          <Field label="Email" error={errors.email}>
            <input
              {...register('email', { required: 'Email ID is Required' })}
              type="email"
              id="email"
              name="email"
              className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
              defaultValue="saadhasan@learnwithsumit.com"
            />
          </Field>
          <Field label="Password" error={errors.password}>
            <input
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Your password must be at least 8 characters',
                },
              })}
              type="password"
              id="password"
              name="password"
              className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
              defaultValue="learnwithsumit123"
            />
          </Field>
          <p>{errors?.root?.random?.message}</p>
          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition-all duration-200">
              Login
            </button>
          </div>
          <p className="text-center">
            Don`t have an account?{' '}
            <Link to="/register" className="text-indigo-600 hover:underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  )
}
