"use client";
import { useForm } from "react-hook-form";
import Button from "./ui/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { emailSchema } from "@/lib/validation";
import { z } from "zod";
import ErrorMessage from "./ui/ErrorMessage";
import { submitEmail } from "@/api";
import { useState } from "react";
import Image from "next/image";
import { success } from "@/assets";
import { X } from "lucide-react";
const SubmitEmail = () => {
  const [error, setError] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [isSubmitted, setSubmitted] = useState<boolean>(false);
  const form = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
  });
  const onSubmit = async (data: z.infer<typeof emailSchema>) => {
    setLoading(true);
    setSubmitted(true);
    await new Promise(() => {
      setTimeout(() => {
        setLoading(false);
        setError({ message: "some error" });
      }, 3000);
    });
    const { message, status } = await submitEmail(data);
    if (status !== 200) {
      setError(message);
    }
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
            autoComplete="off"
            {...form.register("email", { required: true })}
            className="bg-transparent font-Inter font-light text-grey-200 pl-6 py-[18px] h-full inline-block outline-none"
            placeholder="Your business email..."
            readOnly={isSubmitted}
            id="email"
          />
          {!isSubmitted ? (
            <Button
              type="submit"
              className="w-[141px] h-[44px] mr-1 text-white font-Inter leading-none text-base  font-semibold rounded-5xl"
            >
              Free trial
            </Button>
          ) : loading ? (
            <Button
              type="button"
              className="w-[44px] h-[44px] p-0 mr-1 flex justify-center items-center rounded-5xl"
            >
              <span className="w-8 inline-block h-8 border-4  animate-spin border-secondary-blue border-t-white rounded-full " />
            </Button>
          ) : error ? (
            <Button
              type="button"
              className="w-[44px] h-[44px] bg-primary-pink p-0 mr-1 flex justify-center items-center rounded-5xl"
            >
              <X strokeWidth={4} color="white" />
            </Button>
          ) : (
            <Button
              type="button"
              className="w-[44px] h-[44px] bg-primary-green p-0 mr-1 flex justify-center items-center rounded-5xl"
            >
              <Image src={success.src} height={13} width={18} alt="success" />
            </Button>
          )}
        </form>
      </div>
      <ErrorMessage message={form.formState.errors.email?.message} />
    </>
  );
};
export default SubmitEmail;