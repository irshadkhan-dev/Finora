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
    city: type === "sign-in" ? z.string().optional() : z.string().min(3),
    ssn:
      type === "sign-in"
        ? z.string().optional()
        : z.string().length(9, "SSN must be exactly 9 digits"),
    state:
      type === "sign-in" ? z.string().optional() : z.string().min(2).max(5),
    postalCode:
      type === "sign-in"
        ? z.string().optional()
        : z.string().length(5, "Postal code must be exactly 5 digits"),
    dateOfBirth: type === "sign-in" ? z.string().optional() : z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6),
  });
