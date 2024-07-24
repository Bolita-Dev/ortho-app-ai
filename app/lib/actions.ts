'use server';

import { generateObject, JSONParseError, TypeValidationError } from 'ai';
import { GeneratedResponse, schema } from '../interfaces';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { deserializeResponse } from '../utils/utils';

type CorrectionsRequestType = {
  originalText: string;
  apiKey?: string;
};

type CorrectionResponseType =
  | { type: 'success'; generated: GeneratedResponse }
  | { type: 'parse-error'; text: string }
  | { type: 'validation-error'; value: unknown }
  | { type: 'unknown-error'; error: unknown };
export async function getCorrections(
  data: CorrectionsRequestType
): Promise<CorrectionResponseType> {
  const google = createGoogleGenerativeAI({
    apiKey: process.env.GOOGLE_API_KEY || data.apiKey,
  });
  const { originalText } = data;

  try {
    const response = await generateObject({
      model: google('models/gemini-1.5-pro-latest'),
      schema,
      prompt: `Revisa la siguiente frase para detectar faltas de ortografía y devuélveme un archivo JSON que contenga lo siguiente: La frase original, la frase corregida, un array de objetos con los detalles de cada palabra incorrecta, incluyendo: La palabra escrita incorrectamente, la versión correcta de la palabra y una explicación sencilla de la Real Academia Española (RAE) sobre la regla ortográfica incumplida: ${originalText}. Distingue entre mayúsculas y minúsculas únicamente si las palabras son nombres propios.`,
    });
    return {
      type: 'success',
      generated: deserializeResponse(response.object),
    };
  } catch (error) {
    console.error(error);
    if (TypeValidationError.isTypeValidationError(error)) {
      return { type: 'validation-error', value: error.value };
    } else if (JSONParseError.isJSONParseError(error)) {
      return { type: 'parse-error', text: error.text };
    } else {
      return { type: 'unknown-error', error };
    }
  }
}
