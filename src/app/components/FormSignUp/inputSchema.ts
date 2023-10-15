import { z } from "zod";

export const SignupSchema = z.object({
  firstName: z.string().max(100),
  familyName: z.string().max(100),
  email: z.string().email(),
});

export type SignupSchemaType = z.infer<typeof SignupSchema>