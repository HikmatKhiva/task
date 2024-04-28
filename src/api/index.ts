import { emailSchema } from "@/lib/validation";
import { z } from "zod";
export const submitEmail = async (email: z.infer<typeof emailSchema>) => {
  const response = await fetch("example.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(email),
  });
  const status = await response.status;
  const { message } = await response.json();
  return { status, message };
};
