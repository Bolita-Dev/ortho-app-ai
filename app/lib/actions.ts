'use server';

import { generateObject } from 'ai';
import { schema } from '../interfaces';
import { createGoogleGenerativeAI } from '@ai-sdk/google';

type CorrectionsRequestType = {
  originalText: string;
  apiKey: string;
};
export async function getCorrections(data: CorrectionsRequestType) {
  const google = createGoogleGenerativeAI({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY || data.apiKey,
  });
  const { originalText } = data;
  try {
    const response = await generateObject({
      model: google('models/gemini-1.5-flash-latest'),
      schema,
      prompt: `Revisa la siguiente frase para detectar faltas de ortografía y devuélveme un archivo JSON que contenga lo siguiente: original: La frase original. corrected: La frase corregida.corrections: Un array de objetos con los detalles de cada palabra incorrecta, incluyendo: original: La palabra escrita incorrectamente. corrected: La versión correcta de la palabra.explanation: Una explicación sencilla de la Real Academia Española (RAE) sobre la regla ortográfica incumplida. raeUrl: El enlace a la regla específica en la web oficial de la RAE.: ${originalText}. `,
    });
    return response.object;
  } catch (error) {
    throw error;
  }
}
