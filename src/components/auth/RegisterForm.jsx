import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Field from "../shared/Field";
import { axiosInstance } from "../../api";
import { toast } from "react-toastify";

export default function RegisterForm() {
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const registerFormSubmit = async (formData) => {
    try {
      const response = await axiosInstance.post("/auth/register", formData);
      if (response.status === 201) {
        toast.success("Register successful");
        navigate("/login");
      }
    } catch (error) {
      setError("root.random", {
        type: "random",
        message: ` ${error.response.data.error} `,
      });
    }
  };

  return (
    <section className="container">
      <div className="w-full md:w-1/2 mx-auto bg-[#030317] p-8 rounded-md mt-12">
        <h2 className="text-2xl font-bold mb-6">Register</h2>
        <form
          action=""
          autoComplete="off"
          onSubmit={handleSubmit(registerFormSubmit)}
        >
          <Field label="First Name" error={errors.firstName}>
            <input
              {...register("firstName", { required: "Required first Name" })}
              type="text"
              id="firstName"
              name="firstName"
              className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </Field>
          <Field label="Last Name" error={errors.lastName}>
            <input
              {...register("lastName")}
              type="text"
              id="lastName"
              name="lastName"
              className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </Field>
          <Field label="Email" error={errors.email}>
            <input
              {...register("email", { required: "Email ID is Required" })}
              type="email"
              id="email"
              name="email"
              className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </Field>
          <Field label="Password" error={errors.password}>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Your password must be at least 8 characters",
                },
              })}
              type="password"
              id="password"
              name="password"
              className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </Field>
          <p>{errors?.root?.random?.message}</p>
          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
            >
              Create Account
            </button>
          </div>
          <p className="text-center">
            Already have account?{" "}
            <Link to="/login" className="text-indigo-600 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}
