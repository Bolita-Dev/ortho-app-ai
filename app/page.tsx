"use client";

import { google } from "@ai-sdk/google";
import { generateObject } from "ai";
import { ChangeEvent, FormEvent, useState } from "react";
import { z } from "zod";
import Textfield from "@/app/components/Textfield";
import Card from "./components/Card";
export default function Home() {
  const [input, setInput] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
      y devuelve un fichero json con la frase corregida y un array con de 
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
    <main className="bg-slate-900 h-screen p-2">
      <div className="flex flex-col justify-center items-center">
        <Card>
          <Textfield />
        </Card>

        <div className="flex w-full max-w-2xl gap-4 overflow-x-auto pb-4">
          <Card>
            <div className="flex items-center gap-2 text-black dark:text-white">
              <span className="text-sm font-bold">Original text</span>
            </div>
            <p className="text-pretty mt-4 sm:mt-0 text-sm text-slate-700 dark:text-slate-300">
              A magician who turns caffeine into code, pizza into programs, and
              stress into syntax errors.
            </p>
          </Card>

          <Card>
            <div className="flex items-center gap-2 text-black dark:text-white">
              <span className="text-sm font-bold">Reviewed text</span>
            </div>
            <p className="text-pretty mt-4 sm:mt-0 text-sm text-slate-700 dark:text-slate-300">
              Someone who talks to computers in their own language and
              occasionally gets a response.
            </p>
          </Card>
        </div>
      </div>
    </main>
  );
}
