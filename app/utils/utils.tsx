import { correctionStatus } from '../constants';
import { GeneratedResponse } from '../interfaces';

export const deserializeResponse = (
  data: GeneratedResponse
): GeneratedResponse => {
  data.corrections = data.corrections.filter(
    item => item.correctedWord !== item.originalWord
  );
  return data;
};

export const getSuccessPercentage = (
  errors: number,
  originalText: string
): number => {
  let totalWords = originalText?.trim().split(/\s+/).filter(Boolean).length;
  let correctWords = totalWords - errors;
  let successPercentage = (correctWords / totalWords) * 100;

  return Math.round(successPercentage);
};

export const getCorrectionStatus = (
  errorCount: number
): { img: string; messages: string[] } => {
  if (errorCount >= 3) {
    return correctionStatus.poor;
  } else if (errorCount >= 1) {
    return correctionStatus.good;
  } else {
    return correctionStatus.excellent;
  }
};

export const highlightWords = (
  sentence: string,
  words: string[],
  color: string
) => {
  const pattern = new RegExp(`(${words.join('|')})`, 'gi');
  const highlightedText = sentence.replace(pattern, match => {
    return `<span class="${color}">${match}</span>`;
  });
  return highlightedText;
};
