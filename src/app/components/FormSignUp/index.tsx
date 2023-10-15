'use client'
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupSchema, SignupSchemaType } from "./inputSchema";
import { FC } from "react";

export type Props = {
    defaultValues?: SignupSchemaType
}

export const FormSignUp: FC<Props> = ({defaultValues}) => {

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: defaultValues,
        resolver: zodResolver(SignupSchema)
      });

      const onSubmit = async (data: any) => {
        console.log(data)
      }


      return (
        <form  onSubmit={handleSubmit(onSubmit)}>
          <Controller 
            name="email"
            control={control}
            render={({ field }) => <input {...field} type="email" />}
          />
          {errors.email && <p>Invalid email address</p>}
          <Controller 
            name="firstName"
            control={control}
            render={({ field }) => <input {...field} type="firstName" />}
          />
          {errors.firstName && <p>Invalid firstName address</p>}
          <Controller 
            name="familyName"
            control={control}
            render={({ field }) => <input {...field} type="familyName" />}
          />
          {errors.familyName && <p>Invalid familyName address</p>}
          <button type="submit">Signup</button>

        </form>
      )
}