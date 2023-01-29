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

const article = document.querySelector(".c-article-body__content");
if (article) {
    var randWordArray = randomWordArray(article.textContent, 3);
    console.log(randWordArray);
    // let tArray = translateArray(randWordArray);
    // console.log(tArray);
    translateApiRequest({text: randWordArray[0], lang: "latin"});
    }

    // create possible variable options
let option1 = randWordArray[0];
let option2 = randWordArray[1];
let option3 = randWordArray[2];
let buttonSelected = 0;
let correctAnswer = 1;
let button1Checked = false;
let button2Checked = false;
let button3Checked = false;
let word1Completed = false;
let word2Completed = false;
let word3Completed = false;

// Create an overlay element
let overlay = document.createElement("div");
overlay.id = "overlay";
overlay.removeAttribute("style")
overlay.style.position = "fixed";
overlay.style.top = 0;
overlay.style.left = 0;
overlay.style.width = "100%";
overlay.style.height = "100%";
overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
overlay.style.zIndex = "9999";

// Add exiticon to the modal
const img = document.createElement("img");
img.src = chrome.runtime.getURL("scripts/exiticon.png");
img.style.width = "40px";
img.style.height = "40px";
img.style.float = "right";

// hover effect for exiticon
img.addEventListener('mouseover', () => {
    img.style.cursor = "pointer";
});

// Create a modal element
let modal = document.createElement("div");
modal.className ='';

modal.classList.add("duolingo-modal");
modal.id = "modal";

modal.style.position = "absolute";
modal.style.top = "50%";
modal.style.left = "50%";
modal.style.transform = "translate(-50%, -50%)";
modal.style.backgroundColor = "white";
modal.style.padding = "20px";
modal.style.zIndex = "10000";
modal.style.width = "28%";
modal.style.height = "53%";
modal.style.fontSize = "100px !important";
modal.style.borderRadius = "10px";

let translateWord = "Bonjour"
let element = document.createElement("div");
element.id = "element";
element.className = '';
element.style.paddingBottom = "10px";
element.innerHTML = `<h3><br>${translateWord} means...<h3/>`;

let button1 = document.createElement("button");
button1.className = 'btn';
button1.id = "button1";
button1.style.color = "#3c3c3c";
button1.style.backgroundColor = "white";
button1.style.borderRadius = "16px";
button1.style.border = "2px solid #e5e5e5";
button1.style.borderBottom = "6px solid #e5e5e5"
button1.style.width = "90%";
button1.style.marginLeft = "auto";
button1.style.marginRight = "auto";
button1.style.display = "block";
button1.innerHTML = option1;


let button2 = document.createElement("button");
button2.className = 'btn';
button2.id = "button2";
button2.style.color = "#3c3c3c";
button2.style.backgroundColor = "white";
button2.style.borderRadius = "16px";
button2.style.border = "2px solid #e5e5e5";
button2.style.borderBottom = "6px solid #e5e5e5"
button2.style.width = "90%";
button2.style.marginLeft = "auto";
button2.style.marginRight = "auto";
button2.style.display = "block";
button2.innerHTML = option2;

let button3 = document.createElement("button");
button3.className = 'btn';
button3.id = "button3";
button3.style.color = "#3c3c3c";
button3.style.backgroundColor = "white";
button3.style.borderRadius = "16px";
button3.style.border = "2px solid #e5e5e5";
button3.style.borderBottom = "6px solid #e5e5e5"
button3.style.width = "90%";
button3.style.marginLeft = "auto";
button3.style.marginRight = "auto";
button3.style.display = "block";
button3.innerHTML = option3;

button1.addEventListener('click', () => {
    if (buttonSelected == 2) {
        button2.style.backgroundColor = "white";
        button2.style.border = "2px solid #e5e5e5";
        button2.style.borderBottom = "6px solid #e5e5e5";
    } else if (buttonSelected == 3) {
        button3.style.backgroundColor = "white";
        button3.style.border = "2px solid #e5e5e5";
        button3.style.borderBottom = "6px solid #e5e5e5";
    }
    
    buttonSelected = 1;
    console.log(buttonSelected);
    button1.style.borderBottom = "2px solid #1cb0f6";
    button1.style.backgroundColor = "";
    setTimeout(() => {
        button1.style.borderBottom = "6px solid #1cb0f6";
    }, 300);
    // set button to blue
    button1.style.backgroundColor = "#ddf4ff";
    button1.style.border = "2px solid #1cb0f6";

    if (button2Checked == true || button3Checked == true) {
        checkButton.innerHTML = "Check";
    }
    button2Checked = true;
});

button2.addEventListener('click', () => {
    if (buttonSelected == 1) {
        button1.style.backgroundColor = "white";
        button1.style.border = "2px solid #e5e5e5";
        button1.style.borderBottom = "6px solid #e5e5e5";
    } else if (buttonSelected == 3) {
        button3.style.backgroundColor = "white";
        button3.style.border = "2px solid #e5e5e5";
        button3.style.borderBottom = "6px solid #e5e5e5";
    }

    buttonSelected = 2;
    console.log(buttonSelected);
    button2.style.borderBottom = "2px solid #1cb0f6";
    setTimeout(() => {
        button2.style.borderBottom = "6px solid #1cb0f6";
    }, 300);
    // set button to blue
    button2.style.backgroundColor = "#ddf4ff";
    button2.style.border = "2px solid #1cb0f6";

    if (button1Checked == true || button3Checked == true) {
        checkButton.innerHTML = "Check";
    }
    button2Checked = true;
});

button3.addEventListener('click', () => {
    if (buttonSelected == 1) {
        button1.style.backgroundColor = "white";
        button1.style.border = "2px solid #e5e5e5";
        button1.style.borderBottom = "6px solid #e5e5e5";
    } else if (buttonSelected == 2) {
        button2.style.backgroundColor = "white";
        button2.style.border = "2px solid #e5e5e5";
        button2.style.borderBottom = "6px solid #e5e5e5";
    }
    
    buttonSelected = 3;
    console.log(buttonSelected);
    button3.style.borderBottom = "2px solid #1cb0f6";
    setTimeout(() => {
        button3.style.borderBottom = "6px solid #1cb0f6";
    }, 300);
    // set button to blue
    button3.style.backgroundColor = "#ddf4ff";
    button3.style.border = "2px solid #1cb0f6";

    if (button1Checked == true || button2Checked == true) {
        checkButton.innerHTML = "Check";
    }
    button3Checked = true;
});

button1.onmouseover = function() {
    if (button1Checked == false) {
        button1.style.backgroundColor = "#f8f4f4";
        img.style.cursor = "pointer";
    }
}

button1.onmouseout = function() {
    if (buttonSelected != 1) {
        button1.style.backgroundColor = "white";
    } else {
        button1.style.backgroundColor = "#ddf4ff";
    }
}

button2.onmouseover = function() {
    if (button2Checked == false) {
        button2.style.backgroundColor = "#f8f4f4";
        img.style.cursor = "pointer";
    }
}

button2.onmouseout = function() {
    if (buttonSelected != 2) {
        button2.style.backgroundColor = "white";
    } else {
        button2.style.backgroundColor = "#ddf4ff";
    }
}

button3.onmouseover = function() {
    if (button3Checked == false) {
        button3.style.backgroundColor = "#f8f4f4";
        img.style.cursor = "pointer";
    }
}

button3.onmouseout = function() {
    if (buttonSelected != 3) {
        button3.style.backgroundColor = "white";
    } else {
        button3.style.backgroundColor = "#ddf4ff";
    }
}

// create check button
let checkButton = document.createElement("button");
checkButton.style.width = "40%";
checkButton.style.border = "2px solid #7ac70c";
checkButton.style.borderBottomWidth = "6px";
checkButton.style.borderRadius = "10px";
checkButton.style.backgroundColor = "#8ee000";
checkButton.style.color = "#fff";
checkButton.style.transition = "0.1s";
checkButton.innerHTML = "Check";
checkButton.style.float = "right";


// create defaut modal 
let wordBank = document.createElement("div");

wordBank.style.position = "fixed";
wordBank.style.top = "50%";
wordBank.style.right = "5%";
wordBank.style.transform = "translate(20%, 20%)";
wordBank.style.width = "13%";
wordBank.style.height = "38%";
// push modal to right side
wordBank.style.marginRight = "0.1rem";
wordBank.style.backgroundColor = "black";
wordBank.style.borderRadius = "10px";
wordBank.style.zIndex = "1000";
wordBank.style.marginLeft = "3rem";
wordBank.style.backgroundColor = "#fff";
wordBank.style.border = "2px solid #3c3c3c";
wordBank.innerHTML = "<h2>Words</h2>";
wordBank.style.textAlign = "center";
wordBank.style.paddingTop = "1rem";

let word1 = document.createElement("button");
word1.className = 'btn';
word1.id = "button1";
word1.style.color = "#3c3c3c";
word1.style.border = "2px solid #7ac70c";
word1.style.borderBottomWidth = "6px";
word1.style.borderRadius = "10px";
word1.style.backgroundColor = "#8ee000";
word1.style.width = "90%";
word1.style.marginLeft = "auto";
word1.style.marginRight = "auto";
word1.style.marginTop = "0.5rem";
word1.style.display = "block";
word1.innerHTML = "test";

let word2 = document.createElement("button");
word2.className = 'btn';
word2.id = "button1";
word2.style.color = "#3c3c3c";
word2.style.border = "2px solid #7ac70c";
word2.style.borderBottomWidth = "6px";
word2.style.borderRadius = "10px";
word2.style.backgroundColor = "#8ee000";
word2.style.width = "90%";
word2.style.marginLeft = "auto";
word2.style.marginRight = "auto";
word2.style.display = "block";
word2.innerHTML = "test";

let word3 = document.createElement("button");
word3.className = 'btn';
word3.id = "button1";
word3.style.color = "#3c3c3c";
word3.style.border = "2px solid #7ac70c";
word3.style.borderBottomWidth = "6px";
word3.style.borderRadius = "10px";
word3.style.backgroundColor = "#8ee000";
word3.style.width = "90%";
word3.style.marginLeft = "auto";
word3.style.marginRight = "auto";
word3.style.display = "block";
word3.innerHTML = "test";

word1.addEventListener('click', () => {
    word1.style.borderBottomWidth = "2px";
    word1.style.marginTop = "4px";
    setTimeout(() => {
        word1.style.borderBottomWidth = "6px";
        word1.style.marginTop = "0px";
    }, 300);

    // add modal
    overlay.appendChild(modal);
    modal.appendChild(img);
    modal.appendChild(element);
    modal.appendChild(button1);
    modal.appendChild(button2);
    modal.appendChild(button3);
    modal.appendChild(checkButton);

    // Append the overlay to the body
    document.body.appendChild(overlay);

});

word2.addEventListener('click', () => {
    word2.style.borderBottomWidth = "2px";
    word2.style.marginTop = "4px";
    setTimeout(() => {
        word2.style.borderBottomWidth = "6px";
        word2.style.marginTop = "0px";
    }, 300);
    
    // add modal
    overlay.appendChild(modal);
    modal.appendChild(img);
    modal.appendChild(element);
    modal.appendChild(button1);
    modal.appendChild(button2);
    modal.appendChild(button3);
    modal.appendChild(checkButton);

    // Append the overlay to the body
    document.body.appendChild(overlay);
});

word3.addEventListener('click', () => {
    word3.style.borderBottomWidth = "2px";
    word3.style.marginTop = "4px";
    setTimeout(() => {
        word3.style.borderBottomWidth = "6px";
        word3.style.marginTop = "0px";
    }, 300);
    
    // add modal
    overlay.appendChild(modal);
    modal.appendChild(img);
    modal.appendChild(element);
    modal.appendChild(button1);
    modal.appendChild(button2);
    modal.appendChild(button3);
    modal.appendChild(checkButton);

    // Append the overlay to the body
    document.body.appendChild(overlay);
});

checkButton.addEventListener('click', () => {
    checkButton.style.borderBottomWidth = "2px";
    checkButton.style.marginTop = "4px";
    setTimeout(() => {
        checkButton.style.borderBottomWidth = "6px";
        checkButton.style.marginTop = "0px";
    }, 300);

    if (buttonSelected == correctAnswer && buttonSelected == 1) {
        button1Checked = true;
        word1Completed = true;
        button1.style.backgroundColor = "#d7ffb8";
        button1.style.border = "2px solid #58a700"; 
        button1.style.borderBottom = "6px solid #58a700";

        // change word bank button to grey
        word1.style.color = "#3c3c3c";
        word1.style.backgroundColor = "white";
        word1.style.borderRadius = "16px";
        word1.style.border = "2px solid #e5e5e5";
        word1.style.borderBottom = "6px solid #e5e5e5"

    } else if (buttonSelected == correctAnswer && buttonSelected == 2) {
        button2Checked = true;
        word2Completed = true;
        button2.style.backgroundColor = "#d7ffb8";
        button2.style.border = "2px solid #58a700";
        button2.style.borderBottom = "6px solid #58a700";

        // change word bank button to grey
        word1.style.color = "#3c3c3c";
        word1.style.backgroundColor = "white";
        word1.style.borderRadius = "16px";
        word1.style.border = "2px solid #e5e5e5";
        word1.style.borderBottom = "6px solid #e5e5e5"

    } else if (buttonSelected == correctAnswer && buttonSelected == 3) {
        button3Checked = true;
        word3Completed = true;
        button3.style.backgroundColor = "#d7ffb8";
        button3.style.border = "2px solid #58a700";
        button3.style.borderBottom = "6px solid #58a700";

        // change word bank button to grey
        word1.style.color = "#3c3c3c";
        word1.style.backgroundColor = "white";
        word1.style.borderRadius = "16px";
        word1.style.border = "2px solid #e5e5e5";
        word1.style.borderBottom = "6px solid #e5e5e5"

    } else if (buttonSelected != correctAnswer && buttonSelected == 1) {
        button1.style.backgroundColor = "#ffdfdf";
        button1.style.border = "2px solid #ec091a";
        button1.style.borderBottom = "6px solid #ec091a";
        checkButton.innerHTML = "Try Again";
    } else if (buttonSelected != correctAnswer && buttonSelected == 2) {
        button2.style.backgroundColor = "#ffdfdf";
        button2.style.border = "2px solid #ec091a";
        button2.style.borderBottom = "6px solid #ec091a"
        checkButton.innerHTML = "Try Again";
    } else if (buttonSelected != correctAnswer && buttonSelected == 3) {
        button3.style.backgroundColor = "#ffdfdf";
        button3.style.border = "2px solid #ec091a";
        button3.style.borderBottom = "6px solid #ec091a"
        checkButton.innerHTML = "Try Again";
    }
});

// close modal when exiticon is clicked
img.addEventListener('click', () => {
    console.log("exiticon clicked");
    document.body.removeChild(overlay);
    
    if (buttonSelected == correctAnswer && buttonSelected == 1) {
        button1.style.color = "#3c3c3c";
        word1.style.backgroundColor = "white";
        button1.style.borderRadius = "16px";
        button1.style.border = "2px solid #e5e5e5";
        button1.style.borderBottom = "6px solid #e5e5e5"
    } else if (buttonSelected == correctAnswer && buttonSelected == 2) {
        button2.style.color = "#3c3c3c";
        word2.style.backgroundColor = "white";
        button2.style.borderRadius = "16px";
        button2.style.border = "2px solid #e5e5e5";
        button2.style.borderBottom = "6px solid #e5e5e5"
    } else if (buttonSelected == correctAnswer && buttonSelected == 3) {
        button3.style.color = "#3c3c3c";
        word3.style.backgroundColor = "white";
        button3.style.borderRadius = "16px";
        button3.style.border = "2px solid #e5e5e5";
        button3.style.borderBottom = "6px solid #e5e5e5"
    }
});

document.body.appendChild(wordBank);
wordBank.appendChild(word1);
wordBank.appendChild(word2);
wordBank.appendChild(word3);