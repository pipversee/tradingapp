import z from "zod";

export const tradeSchema = z.object({
  tradeName: z
    .string()
    .min(4, "Trade Name must be at least 8 characters.")
    .max(255, "Trade Name must be at most 255 characters."),
  tradeSymbol: z
    .string()
    .min(1, "Trade Symbol must be at least 5 characters.")
    .max(50, "Trade Symbol must be at most 50 characters."),
  tradeType: z
    .string()
    .min(5, "Trade Type must be at least 5 characters.")
    .max(50, "Trade Type must be at most 50 characters."),
  entryPrice: z
    .string()
    .min(1, "Trade Entry Price must be at least 5 characters.")
    .max(100, "Trade Entry Price must be at most 100 characters."),
  stopLoss: z
    .string()
    .min(0, "Trade Stop Loss must be at least 5 characters.")
    .max(100, "Trade Stop Loss must be at most 100 characters."),
  positionType: z
    .string()
    .min(4, "Trade Position Type must be at least 5 characters.")
    .max(100, "Trade Position Type must be at most 100 characters."),
  tradeTp1: z
    .string()
    .min(1, "Trade Take Profit must be at least 1 characters.")
    .max(100, "Trade Take Profit must be at most 100 characters."),
  tradeTp2: z
    .string()
    .min(0, "Trade Take Profit must be at least 1 characters.")
    .max(100, "Trade Take Profit must be at most 100 characters."),
  tradeTp3: z
    .string()
    .min(0, "Trade Take Profit must be at least 1 characters.")
    .max(100, "Trade Take Profit must be at most 100 characters."),
  tradeDescription: z
    .string()
    .min(0, "Trade Description must be at least 0 characters.")
    .max(1000, "Trade Description must be at most 1000 characters."),
})