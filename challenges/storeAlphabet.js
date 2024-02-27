// Write a function that takes three args:
// str1, str2, alphabet/alpha
// the function should return the string that should come first
// alphabetically, in reference to the passed in alphabet
// For instance
// storeAlphabet('aggd', 'aggz', 'zgac')
// How should you decide which string comes first with respect tor the passed in alphabet?

// Further, what structure should you use to keep track of the custom alphabet?
// Characters not in the alphabet should be deprioritized

function storeAlphabet(str1, str2, alphabet) {
  // Create a dictionary to map characters to their positions in the alphabet
  const alphaDict = {};
  for (let i = 0; i < alphabet.length; i++) {
    alphaDict[alphabet[i]] = i;
  }

  return ([str1, str2].sort((a, b) => {
    const len = Math.min(a.length, b.length);
    for (let i = 0; i < len; i++) {
      const aCode = alphaDict[a[i]];
      const bCode = alphaDict[b[i]];
      if (aCode > bCode) return 1;
      if (aCode < bCode) return -1;
    }

    if (len === a.length) return -1;
    else return 1;
  }))[0];
}

// HINT: Think about how you check what order the characters come in? Could indexing help?

module.exports = { storeAlphabet };
