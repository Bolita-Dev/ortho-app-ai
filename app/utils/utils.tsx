export const getSuccessPercentage = (
  errors: number,
  originalText: string
): number => {
  let totalWords = originalText?.trim().split(/\s+/).filter(Boolean).length;
  let correctWords = totalWords - errors;
  let correctPercentage = (correctWords / totalWords) * 100;

  return Math.round(correctPercentage);
};
