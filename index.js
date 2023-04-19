let word = "";
let input = document.getElementById("userInput");
const button = document.getElementById("translate");
const reset = document.getElementById("reset");
const translation = document.getElementById("translation");

console.log();

//event listeners
input.addEventListener("keyup", (e) => {
  word = e.target.value;
  console.log(input.value);
});

button.addEventListener("click", (e) => {
  console.log("click");

  const pigLatin = (word) => {
    word = word.toLowerCase().trim();
    let firstLetter = word[0];
    let vowels = ["a", "e", "i", "o", "u"];
    let firstVowel;

    if (vowels.includes(firstLetter) == true) {
      return word + "yay";
    } else {
      for (let index = 0; index < word.length; index++) {
        //check each letter to see how many consonatns there are in a row
        //
        if (vowels.includes(word[index])) {
          firstVowel = index;
          break;
        }
      }
      // tree  eetray
      // tree.substring(2)+ tree.substring(0,2) + "ay"

      // const str = 'Mozilla';

      // console.log(str.substring(1, 3));
      // // Expected output: "oz"

      // console.log(str.substring(2));

      let finalAnswer =
        word.substring(firstVowel) + word.substring(0, firstVowel) + "ay";
      return finalAnswer;
    }
  };
  console.log(pigLatin(word));
  let words = word.split(' ')
  let pigWord = words.map(word => pigLatin(word)).join(' ')
  translation.innerText = pigWord
});

reset.addEventListener("click", (e) => {
    input.value = '';
    translation.innerText = '';
    word = '';
  console.log("click");
});
