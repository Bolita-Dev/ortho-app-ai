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
  successPercentage: number
): { img: string; messages: string[] } => {
  if (successPercentage >= 90) {
    return correctionStatus.excellent;
  } else if (successPercentage >= 60) {
    return correctionStatus.good;
  } else {
    return correctionStatus.poor;
  }
};
