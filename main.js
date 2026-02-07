function countVowels(str) {
  const vowels = "aeiouAEIOU"; // unli harflar
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("hello")); // 2
