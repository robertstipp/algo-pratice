/* Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:
1.Only one letter can be changed at a time
2.Each intermediate word must exist in the word list

Return the length of the sequence or -1 if no sequence exists

EXAMPLE 1: beginWord = 'corn', endWord = 'torn', wordList = ['torn'] -> 1
  Transform [c]orn to [t]orn 
EXAMPLE 2: beginWord = 'cat', endWord = 'dot', wordList = ['bat','bot','dot'] -> 3 
  Transform [c]at to [b]at
  Transform b[a]t to b[o]t
  Transform [b]ot to [d]ot 
EXAMPLE 3: beginWord = 'dog', endWord = 'lip', wordList = ['log','lag','lap','lip'] -> 4 
  Transform [d]og to [l]og
  Transform l[o]g to l[a]g
  Transform la[g] to la[p]
  Transform l[a]p to l[i]p 
*/

const changeWord = (beginWord, endWord, wordList) => {};

module.exports = { changeWord };
