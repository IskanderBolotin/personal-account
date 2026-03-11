/**
 *
 * @param number - число перед склоняемым словом
 * @param words - строковый массив из трех слов, пример: ["отзыв", "отзыва", "отзывов"]
 * @returns число с одним словом из массива words
 */
const declineWordAfterNumber = (number: number, words: [string, string, string]): string => {
  const remainer = number % 10;
  const exceptions = [11, 12, 13, 14];

  if (remainer === 1 && !exceptions.includes(number)) {
    return number + " " + words[0];
  }

  if (remainer > 1 && remainer < 5 && !exceptions.includes(number)) {
    return number + " " + words[1];
  }

  return number + " " + words[2];
};

export { declineWordAfterNumber };
