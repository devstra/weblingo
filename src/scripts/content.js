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
function translateApiRequest(request) {
    var url = serverhost + '/weblingo/en_to_learn/?text=' + encodeURIComponent(request.text) + '&lang=' + encodeURIComponent(request.lang);
    var returnval;
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(response => console.log(response.translation.toLowerCase()))
    .then(function(response) {
        returnval = response;
    })
    .catch(error => console.log(error))
    console.log(returnval);
    return returnval;
    }

function translateArray(array) {
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
        newArray.push(translateApiRequest({text: array[i], lang:"french"}))
    }
}

const article = document.querySelector("article");
if (article) {
    let randWordArray = randomWordArray(article.textContent, 3);
    console.log(randWordArray);
    // let tArray = translateArray(randWordArray);
    // console.log(tArray);
    translateApiRequest({text: randWordArray[0], lang: "latin"});
    }



    
