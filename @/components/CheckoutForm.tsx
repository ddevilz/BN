import cogoToast from "cogo-toast";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "../../schemas/form-schema";

const CheckoutForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cus_name: "",
      cus_email: "",
      cus_address: "",
      cus_city: "",
      cus_country: "",
      cus_zip: "",
      cus_card: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    cogoToast.success("Form submitted successfully!");
    console.log(data);
  };

  return (
    <div className="p-9 w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <p className="text-white font-medium">Customer information</p>
          <FormField
            control={form.control}
            name="cus_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    className="text-black"
                    placeholder="Your Name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cus_email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    className="text-black"
                    placeholder="Your Email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cus_address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input
                    className="text-black"
                    placeholder="Street"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cus_city"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input className="text-black" placeholder="City" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="w-full flex gap-3">
            <FormField
              control={form.control}
              name="cus_country"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      className="text-black"
                      placeholder="Country"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cus_zip"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      className="text-black"
                      placeholder="Zip"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <p className="mt-4 text-white font-medium">Payment information</p>
          <FormField
            control={form.control}
            name="cus_card"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Card</FormLabel>
                <FormControl>
                  <Input
                    className="text-black"
                    placeholder="Card Number MM/YY CVC"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="mt-4">
            <Button variant={"premium"} className="w-full" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CheckoutForm;
