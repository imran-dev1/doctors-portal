import React, { useEffect } from "react";
import auth from "../firebase.init";
import {
   useSignInWithEmailAndPassword,
   useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Loading from "../Components/Loading/Loading";
import useToken from "../hooks/useToken";

const Login = () => {
   const [signInWithEmailAndPassword, user, loading, error] =
      useSignInWithEmailAndPassword(auth);
   const [signInWithGoogle, gUser, gLoading, gError] =
      useSignInWithGoogle(auth);
   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm();
   const navigate = useNavigate();
   const location = useLocation();
   const [token] = useToken(user || gUser);
   const from = location.state?.from?.pathname || "/";

   useEffect(() => {
      if (token) {
         navigate(from, { replace: true });
      }
   }, [token, from, navigate]);

   if (loading || gLoading) {
      return <Loading></Loading>;
   }

   const handleLogin = (data) => {
      const { email, password } = data;
      signInWithEmailAndPassword(email, password);
      reset();
   };
   return (
      <div className="flex justify-center items-center h-screen">
         <div className="card w-96 bg-slate-100 shadow-xl">
            <div className="card-body">
               <h2 className="card-title justify-center mb-3">Login</h2>

               <div>
                  <div className="mb-5">
                     <form
                        onSubmit={handleSubmit(handleLogin)}
                        className=" flex flex-col gap-2"
                     >
                        <input
                           {...register("email", { required: true })}
                           className="input input-bordered w-full bg-slate-100"
                           type="email"
                           placeholder="Your email"
                        />
                        {errors.email?.type === "required" && (
                           <p className="text-red-400 text-sm">
                              Email is required!
                           </p>
                        )}
                        <input
                           {...register("password", { required: true })}
                           className="input input-bordered w-full bg-slate-100"
                           type="password"
                           placeholder="Password"
                        />
                        {errors.password?.type === "required" && (
                           <p className="text-red-400 text-sm">
                              Password is required!
                           </p>
                        )}
                        <Link to="/reset-password" className=" text-sm">
                           Forgot Password?
                        </Link>

                        <input
                           type="submit"
                           value="Login"
                           className="btn btn=primary text-white mt-3"
                        />
                        <p className="text-sm">
                           New to doctors portal?
                           <Link
                              to="/register"
                              className="underline ml-1 text-primary"
                           >
                              Create account
                           </Link>
                        </p>
                     </form>
                  </div>
                  <div className="flex flex-col w-full border-opacity-50">
                     <div className="divider">OR</div>
                     <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline"
                     >
                        Continue with google
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;
