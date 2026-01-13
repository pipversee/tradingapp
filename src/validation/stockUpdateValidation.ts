import z from "zod";

export const stockUpdateSchema = z.object({
  updateTitle: z.string().min(1).max(1000),
  updateStockSymbol: z.string().min(2).max(1000),
  expectedReturn: z.string().min(3).max(300),
  file: z.custom<File[]>(),
  updateReadTime: z.string().min(0).max(100),
  updateContent: z.string().min(5).max(40000),
})