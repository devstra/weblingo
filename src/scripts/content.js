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



var serverhost = 'http://127.0.0.1:8000';
function theObject(request) {
    var url = serverhost + '/weblingo/en_to_learn/?text=' + encodeURIComponent(request.text) + '&lang=' + encodeURIComponent(request.lang);
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(response => console.log(response.translation.toLowerCase()))
    .catch(error => console.log(error))
    return true;
}

const article = document.querySelector("article");
if (article) {
    let randWordArray = randomWordArray(article.textContent, 10);
    var instance = new Mark(article);

    for(let i = 0; i < randWordArray.length; i++) {
        theObject({text: randWordArray[i], lang: "french"})
    }

    for (let i = 0; i < randWordArray.length; i++) {
        instance.mark(randWordArray[i]);
    }
    console.log(randWordArray);
    }


    
