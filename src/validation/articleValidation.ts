import z from "zod";

export const articleSchema = z.object({
  articleTitle: z.string().min(1).max(500),
  clickbait: z.string().min(1).max(1000),
  file: z.custom<File[]>(),
  category: z.string().min(0).max(300),
  readTime: z.string().min(0).max(100),
  content: z.string().min(2).max(40000),
})