function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

function wordArray(text) {
    return text.replace(/[^A-Za-z]+/g, " ").trim().toLowerCase().split(" ");
}

function randomWordArray(text, numWords) {
    let array = [];
    let fullArray = wordArray(text);
    for (let i = 0; i < numWords; i++) {
        array.push(fullArray[Math.floor(Math.random() * fullArray.length)]);
    }
    return array;
}

const article = document.querySelector("article");
if (article) {
    let randWordArray = randomWordArray(article.textContent, 10);
    console.log(randWordArray);
    }