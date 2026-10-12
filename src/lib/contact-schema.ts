import { z } from "zod";
import { projectTypes } from "./project-types";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(80),
  email: z.email("Please enter a valid email.").max(200),
  type: z.enum(projectTypes),
  message: z.string().trim().min(10, "Please write a little more (10+ characters).").max(4000),
});

export type ContactInput = z.infer<typeof contactSchema>;
