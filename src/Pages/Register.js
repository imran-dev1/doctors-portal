import React from "react";
import auth from "../firebase.init";
import {
   useCreateUserWithEmailAndPassword,
   useSignInWithGoogle,
   useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useToken from "../hooks/useToken";
import Loading from "../Components/Loading/Loading";

const Register = () => {
   const [createUserWithEmailAndPassword, user, loading, error] =
      useCreateUserWithEmailAndPassword(auth);
   const [updateProfile] = useUpdateProfile(auth);
   const [signInWithGoogle, gUser, gLoading, gError] =
      useSignInWithGoogle(auth);
   const navigate = useNavigate();
   const [token] = useToken(user || gUser);
   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm();

   if (error) {
      return (
         <div>
            <p>Error: {error.message}</p>
         </div>
      );
   }
   if (loading) {
      return <Loading></Loading>
   }
   if (token) {
      navigate("/appointment");
   }

   const handleRegister = async (data) => {
      const { name, email, password } = data;
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
      reset();
   };
   return (
      <div className="flex justify-center items-center h-screen">
         <div className="card w-96 bg-slate-100 shadow-xl">
            <div className="card-body">
               <h2 className="card-title justify-center mb-3">Register</h2>

               <div>
                  <div className="mb-5">
                     <form
                        onSubmit={handleSubmit(handleRegister)}
                        className=" flex flex-col gap-2"
                     >
                        <input
                           {...register("name", { required: true })}
                           className="input input-bordered w-full bg-slate-100"
                           type="text"
                           placeholder="Full name"
                        />
                        {errors.name?.type === "required" && (
                           <p className="text-red-400 text-sm">
                              Name is required!
                           </p>
                        )}
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
                           {...register("password", {
                              required: true,
                              pattern:
                                 /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                           })}
                           className="input input-bordered w-full bg-slate-100"
                           type="password"
                           placeholder="Password"
                        />
                        {errors.password?.type === "required" && (
                           <p className="text-red-400 text-sm">
                              Password is required!
                           </p>
                        )}
                        {errors.password?.type === "pattern" && (
                           <p className="text-red-400">
                              Password should have minimum eight characters, at
                              least one uppercase, one lowercase, one number and
                              one special character
                           </p>
                        )}

                        <input
                           type="submit"
                           value="Register"
                           className="btn btn=primary text-white mt-3"
                        />
                        <p className="text-sm">
                           Have an account?
                           <Link
                              to="/login"
                              className="underline ml-1 text-primary"
                           >
                              Login here
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

export default Register;
