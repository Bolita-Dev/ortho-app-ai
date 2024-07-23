import { correctionMessages } from '../constants';

export const getSuccessPercentage = (
  errors: number,
  originalText: string
): number => {
  let totalWords = originalText?.trim().split(/\s+/).filter(Boolean).length;
  let correctWords = totalWords - errors;
  let successPercentage = (correctWords / totalWords) * 100;

  return Math.round(successPercentage);
};

export const getCorrectionMessage = (successPercentage: number): string => {
  if (successPercentage >= 90) {
    return correctionMessages.excellent[
      Math.floor(Math.random() * correctionMessages.excellent.length)
    ];
  } else if (successPercentage >= 60) {
    return correctionMessages.good[
      Math.floor(Math.random() * correctionMessages.good.length)
    ];
  } else {
    return correctionMessages.poor[
      Math.floor(Math.random() * correctionMessages.poor.length)
    ];
  }
};
