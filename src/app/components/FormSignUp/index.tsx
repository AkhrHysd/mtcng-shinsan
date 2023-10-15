'use client'
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupSchema, SignupSchemaType } from "./inputSchema";
import { FC } from "react";
import { createUser } from "../createUser";

export type Props = {
    defaultValues?: SignupSchemaType
}

export const FormSignUp: FC<Props> = ({defaultValues}) => {

    const { control,  formState: { errors } } = useForm({
        defaultValues: defaultValues || {
          email: '',
          familyName: '',
          firstName: '',
        },
        resolver: zodResolver(SignupSchema)
      });



      return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8s">
        <form action={(data) => createUser(data)}>

          <div className="flex flex-col sm:flex-row">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <Controller 
              name="email"
              control={control}
              render={({ field }) => <input {...field} type="email" className="text-gray-700 mt-1 sm:mt-0 sm:ml-3 flex-grow rounded-md" />}
            />
            {errors.email && <p  className="text-red-600 text-sm">Invalid email address</p>}
          </div>
          <div className="flex flex-col sm:flex-row">
          <div className="flex-grow">
            <label htmlFor="familyName" className="block text-sm font-medium text-gray-700">姓</label>
            <Controller 
              name="familyName"
              control={control}
              render={({ field }) => <input {...field} type="familyName" className="text-gray-700 mt-1 rounded-md" />}
            />
            {errors.familyName && <p className="text-red-600 text-sm">Invalid familyName address</p>}
          </div>
          <div className="flex-grow">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">名</label>
            <Controller 
              name="firstName"
              control={control}
              render={({ field }) => <input {...field} type="firstName" className="text-gray-700 mt-1 rounded-md" />}
            />
            {errors.firstName && <p className="text-red-600 text-sm">Invalid firstName</p>}
          </div>
          </div>
          <button type="submit">登録する</button>

        </form>
        </div>
      )
}