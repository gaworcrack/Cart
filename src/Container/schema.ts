import { z } from "zod";

export const schema = z.object({
  fullName: z.string().refine((value) => value != "", {
    message: "Fullname is required",
  }),
  phoneNumber: z.string().max(11, "should not be more than 11"),
});
