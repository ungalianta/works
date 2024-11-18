const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const getRandomIndex = () => Math.floor(Math.random() * alphabet.length);

const index1 = getRandomIndex();
const index2 = getRandomIndex();
const index3 = getRandomIndex();
const index4 = getRandomIndex();

const randomWord = alphabet[index1] + alphabet[index2] + alphabet[index3] + alphabet[index4];

console.log(randomWord);

