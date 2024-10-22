import * as z from "zod";

export const SignUpSchema = z.object({
  firstName: z.string().min(1, {
    message: "first name is mandatory",
  }),
  lastName: z.string().optional(),
  address: z.string().min(1, {
    message: "address is mandatory",
  }),
  state: z.string().min(2, {
    message: "state is mandatory",
  }),
  postalCode: z.string().min(1, {
    message: "postal code is mandatory",
  }),
  birthDate: z.string().date(),
  email: z.string().email(),
  password: z.string().min(6, {
    message: "Minimum six character password required!",
  }),
});
