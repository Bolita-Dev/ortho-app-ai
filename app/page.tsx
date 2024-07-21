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
  evaluation: z.object({
    score: z.number(),
    errors: z.number(),
  }),
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
      prompt: `Revisa si la siguiente frase tiene faltas de ortografía 
      y devuelve un fichero json con la frase corregida, la frase original y un array con 
      las palabras que estaban mal y muestra su versión errónea y correcta y 
      la explicación sencilla de la real academia española de la lengua explicando la regla 
      ortográfica que está incumpliendo y su enlace a la web oficial de la RAE: ${input}. También calcula un porcentaje de exito desde el cero al cien, calculando el porcentaje de errores.`,
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
