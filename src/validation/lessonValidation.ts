import z from "zod";

export const lessonSchema = z.object({
  lessonTitle: z.string().min(1).max(1000),
  clickbait: z.string().min(5).max(1000),
  file: z.custom<File[]>(),
  category: z.string().min(3).max(300),
  readTime: z.string().min(0).max(100),
  content: z.string().min(5).max(40000),
})