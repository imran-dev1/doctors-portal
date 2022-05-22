import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Loading from "../Components/Loading/Loading";

const AddDoctor = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const { data: serviceNames, isLoading } = useQuery("serviceNames", () =>
      fetch("http://localhost:4000/service").then((res) => res.json())
   );

   if (isLoading) {
      return <Loading></Loading>;
   }

   return (
      <div>
         <h2 className="mb-3 text-xl">Add new doctor</h2>
         <form onSubmit={handleSubmit} className=" flex flex-col gap-2">
            <input
               {...register("name", { required: true })}
               className="input input-bordered max-w-sm bg-slate-100"
               type="text"
               placeholder=" Doctor name"
            />
            {errors.name?.type === "required" && (
               <p className="text-red-400 text-sm">Name is required!</p>
            )}
            <input
               {...register("email", { required: true })}
               className="input input-bordered max-w-sm bg-slate-100"
               type="email"
               placeholder="Doctor email"
            />
            {errors.email?.type === "required" && (
               <p className="text-red-400 text-sm">Email is required!</p>
            )}
            <select
               {...register("speciality")}
               className="input input-bordered max-w-sm bg-slate-100"
            >
               {serviceNames?.map((s) => (
                  <option key={s._id} value={s.name}>
                     {s.name}
                  </option>
               ))}
            </select>
            <input
               {...register("profile", { required: true })}
               className="input max-w-sm mt-5"
               type="file"
            />
            {errors.email?.type === "required" && (
               <p className="text-red-400 text-sm">Email is required!</p>
            )}

            <input
               type="submit"
               value="Add doctor"
               className="btn btn=primary text-white mt-3 max-w-sm"
            />
         </form>
      </div>
   );
};

export default AddDoctor;
