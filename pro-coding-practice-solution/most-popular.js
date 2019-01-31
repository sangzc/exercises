/* Find most popular letter in word (if tied, first to reach tie) */

function mostPopular(word) {
  let counts = new Map();
  let highCount = 0;
  let highLetter;

  for (let letter of word) {
    const currCount = counts.get(letter) || 0;
    const newCount = currCount + 1;
    counts.set(letter, newCount);

    if (newCount > highCount) {
      highCount = newCount;
      highLetter = letter;
    }
  }

  return highLetter;
}
