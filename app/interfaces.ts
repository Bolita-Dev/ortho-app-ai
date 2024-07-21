import { z } from "zod";

export const schema = z.object({
  original: z.string(),
  corrected: z.string(),
  corrections: z.array(
    z.object({
      original: z.string(),
      corrected: z.string(),
      explanation: z.string(),
      raeUrl: z.string(),
    })
  ),
});

export type GeneratedResponse = z.infer<typeof schema>;
