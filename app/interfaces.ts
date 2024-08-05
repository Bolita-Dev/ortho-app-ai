import { z } from 'zod';

export const schema = z.object({
  originalText: z.string(),
  correctedText: z.string(),
  corrections: z.array(
    z.object({
      originalWord: z.string(),
      correctedWord: z.string(),
      errorExplanation: z.string(),
      raeUrl: z.string(),
    })
  ),
});

export type GeneratedResponse = z.infer<typeof schema>;

export type Correction = GeneratedResponse['corrections'][number];

export type ErrorWithStatusCode = {
  statusCode: number;
};
