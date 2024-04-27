"use client";
import { useForm } from "react-hook-form";
import Button from "./ui/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { emailSchema } from "@/lib/validation";
import { z } from "zod";
import ErrorMessage from "./ui/ErrorMessage";

const SubmitEmail = () => {
  const form = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
  });

  const onSubmit = (data: z.infer<typeof emailSchema>) => {
    console.log(data); // You can handle form submission here
  };

  return (
    <>
      <div className="form-border w-[466px] h-[56px] rounded-5xl mt-9 overflow-hidden border border-primary-blue/50">
        <form
          className="h-full form-email flex items-center w-full justify-between"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <input
            type="email"
            {...form.register("email", { required: true })}
            className="bg-transparent text-grey-200 pl-6 py-[18px] h-full inline-block outline-none"
            placeholder="Your business email..."
            id="email"
          />
          <Button
            type="submit"
            className="w-[141px] h-[44px] mr-1 text-white font-semibold rounded-5xl"
          >
            Free trial
          </Button>
        </form>
      </div>
      <ErrorMessage message={form.formState.errors.email?.message} />
    </>
  );
};

export default SubmitEmail;
