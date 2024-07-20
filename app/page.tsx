"use client";

import Textfield from "@/app/components/Textfield";
import { generateObject } from "ai";
import { ChangeEvent, useState } from "react";
import { z } from "zod";
import Card from "./components/Card";
import CorrectionsList from "./components/CorrectionsList";
import { createGoogleGenerativeAI } from "@ai-sdk/google";

export default function Home() {
  const [input, setInput] = useState("");

  const google = createGoogleGenerativeAI({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  });
  const handleSubmit = async (event: any) => {
    const response = await generateObject({
      model: google("models/gemini-1.5-flash-latest"),
      schema: z.object({
        corrected: z.string(),
        explanation: z.string(),
        corrections: z.array(
          z.object({
            original: z.string(),
            corrected: z.string(),
            explanation: z.string(),
          })
        ),
        evaluation: z.object({
          score: z.number(),
          errors: z.number(),
          warnings: z.number(),
          info: z.number(),
        }),
      }),
      prompt: `Revisa si la siguiente frase tiene faltas de ortografía 
      y devuelve un fichero json con la frase corregida y un array con 
      las palabras que estaban mal y muestra su versión errónea y correcta y 
      la explicación de la real academia española de la lengua expicando la regla 
      ortográfica que está incumpliendo: ${input}`,
    });

    console.log(response.object);
  };

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
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

        <div className="flex w-full max-w-3xl gap-4">
          <Card>
            <div className="dark:text-slate-500 mb-2">
              <span className="text-sm">Texto corregido</span>
            </div>
            <p className="text-pretty text-m text-slate-700 dark:text-slate-300">
              A magician who turns
              <span className="text-red-600 cursor-pointer">caffeine</span> into
              code, pizza into programs, and stress into syntax errors.
            </p>
          </Card>

          <Card>
            <div className="dark:text-slate-500 mb-2">
              <span className="text-sm">Texto original</span>
            </div>
            <p className="text-pretty text-m text-slate-700 dark:text-slate-300">
              Someone who talks to
              <span className="text-green-600 cursor-pointer">computers</span>
              in their own language and occasionally gets a response.
            </p>
          </Card>
        </div>

        <div className="flex w-full max-w-3xl mt-4">
          <CorrectionsList />
        </div>
      </div>
    </main>
  );
}
