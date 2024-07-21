"use client";

import Textfield from "@/app/components/Textfield";
import { generateObject } from "ai";
import { ChangeEvent, useState } from "react";
import { z } from "zod";
import Card from "./components/Card";
import CorrectionsList from "./components/CorrectionsList";
import { createGoogleGenerativeAI } from "@ai-sdk/google";

const schema = z.object({
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

type ResultType = z.infer<typeof schema>;
export default function Home() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<ResultType>({} as ResultType);

  const { corrected, original } = result;

  const google = createGoogleGenerativeAI({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  });
  const handleSubmit = async (event: any) => {
    const response = await generateObject({
      model: google("models/gemini-1.5-flash-latest"),
      schema,
      prompt: `Revisa la siguiente frase para detectar faltas de ortografía y devuélveme un archivo JSON que contenga lo siguiente:
original: La frase original.
corrected: La frase corregida.
corrections: Un array de objetos con los detalles de cada palabra incorrecta, incluyendo:
original: La palabra escrita incorrectamente.
corrected: La versión correcta de la palabra.
explanation: Una explicación sencilla de la Real Academia Española (RAE) sobre la regla ortográfica incumplida.
raeUrl: El enlace a la regla específica en la web oficial de la RAE.
: ${input}. `,
    });

    console.log(response.object);
    setResult(response.object);
  };

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setInput(event.target.value);
  };

  return (
    <main className="bg-slate-900 h-screen p-4">
      <div className="flex flex-col gap-4 items-center">
        <div className="flex w-full max-w-3xl mt-8 text-slate-700 dark:text-slate-300">
          <input
            type="password"
            id="passwordInput"
            className="w-full rounded-xl border border-slate-300 bg-slate-100 px-6 py-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-700 disabled:cursor-not-allowed disabled:opacity-75 dark:border-slate-700 dark:bg-slate-800/50 dark:focus-visible:outline-blue-600"
            name="password"
            autoComplete="current-password"
            placeholder="Introduce tu API Key de Gemini"
          />
        </div>
        <div className="flex w-full max-w-3xl">
          <Textfield
            handleOnClick={handleSubmit}
            handleOnChange={handleOnChange}
          />
        </div>
        {/* <div className="flex w-full max-w-3xl">
          <ResultsCard />
        </div> */}
        {corrected && (
          <div className="flex w-full max-w-3xl gap-4">
            <Card>
              <div className="dark:text-slate-500 mb-2">
                <span className="text-sm">Texto corregido</span>
              </div>
              <p className="text-pretty text-m text-slate-700 dark:text-slate-300">
                {corrected}
                {/* <span className="text-red-600 cursor-pointer">caffeine</span> */}
              </p>
            </Card>

            <Card>
              <div className="dark:text-slate-500 mb-2">
                <span className="text-sm">Texto original</span>
              </div>
              <p className="text-pretty text-m text-slate-700 dark:text-slate-300">
                {original}
                {/* <span className="text-green-600 cursor-pointer">computers</span> */}
              </p>
            </Card>
          </div>
        )}

        {corrected && (
          <div className="flex w-full max-w-3xl mt-4">
            <CorrectionsList />
          </div>
        )}
      </div>
    </main>
  );
}
