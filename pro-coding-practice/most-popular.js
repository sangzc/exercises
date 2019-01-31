function mostPopular(string) { //changed 's' to 'string'
  let mostPopularLetterMap = new Map();

  let high = 0;
  let mostPopularLetter; //changed 'ltr' to 'mostPopularLetter'
  for (let letter of string) {
    const currentCount = mostPopularLetterMap.get(letter) || 0;
    const newCount = currentCount + 1; //changed 'nc' to 'newCount'
    console.log('letter',letter, 'currentCount', currentCount, 'newCount', newCount)
    mostPopularLetterMap.set(letter, newCount);
    if (newCount > high) { //removed the '=' to debug
      high = newCount;
      mostPopularLetter = letter;
    }
  }
  return mostPopularLetter;
}


