import { z } from "zod";

export const formSchema = z.object({
  cus_name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  cus_email: z.string().email({
    message: "Email must be a valid email address.",
  }),
  cus_address: z.string().min(5, {
    message: "Address must be at least 5 characters.",
  }),
  cus_city: z.string().min(2, {
    message: "City must be at least 2 characters.",
  }),
  cus_country: z.string().min(2, {
    message: "Country must be at least 2 characters.",
  }),
  cus_zip: z.string().min(2, {
    message: "Zip code must be at least 2 characters.",
  }),
  cus_card: z.string().min(5, {
    message: "Card information must be at least 5 characters.",
  }),
});
