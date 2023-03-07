const textAreaEl = document.querySelector('.textarea');
const charsOutput = document.querySelector('.stat__number--characters');
const wordsOutput = document.querySelector('.stat__number--words');
const twitterOutput = document.querySelector('.stat__number--twitter');
const facebookOutput = document.querySelector('.stat__number--facebook');

textAreaEl.addEventListener('input', () => {
    const numberOfChars = textAreaEl.value.length;
    const twitterCharsLeft = 280 - numberOfChars;
    const facebookCharsLeft = 2200 - numberOfChars;


    // set new numbers
    charsOutput.textContent = numberOfChars;
    twitterOutput.textContent = twitterCharsLeft;
    facebookOutput.textContent = facebookCharsLeft;

    // add visual indication limit is exceeded
    facebookCharsLeft < 0 ? facebookOutput.classList.add('stat__number--limit') : facebookOutput.classList.remove('stat__number--limit')
    twitterCharsLeft < 0 ? twitterOutput.classList.add('stat__number--limit') : twitterOutput.classList.remove('stat__number--limit')
});