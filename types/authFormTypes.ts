import * as z from "zod";

export const AuthFormSchema = (type: string) =>
  z.object({
    firstName:
      type === "sign-in"
        ? z.string().optional()
        : z.string().min(3, {
            message: "First name is requied",
          }),

    lastName:
      type === "sign-in"
        ? z.string().optional()
        : z.string().min(3, {
            message: "Last name is required",
          }),

    address1: type === "sign-in" ? z.string().optional() : z.string().max(50),

    state:
      type === "sign-in" ? z.string().optional() : z.string().min(2).max(5),
    postalCode:
      type === "sign-in" ? z.string().optional() : z.string().min(2).max(6),
    dateOfBirth: type === "sign-in" ? z.string().optional() : z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6),
  });
