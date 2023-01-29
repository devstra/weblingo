// Modify if article elem present
/*const article = document.querySelector("article");
if (nextstate = "ON")
if (article) {
    const text = article.textContent;
    const words = text.matchAll(/[^\s]+/g);

    const wordCount = [...words].length;
    const readingTime = Math.round(wordCount / 200);
    const badge = document.createElement("p");

    badge.classList.add("color-secondary-text", "type--caption");
    badge.textContent = `${readingTime} min read (word count ${wordCount})`;

    const heading = article.querySelector("h1");
    const date = article.querySelector("time")?.parentNode;

    (date ?? heading).insertAdjacentElement("afterend", badge);
}*/

// create possible variable options
let option1 = "Hello";
let option2 = "Welcome";
let option3 = "Goodbye";
let buttonSelected = 0;
let correctAnswer = 0;

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

// close modal when exiticon is clicked
img.addEventListener('click', () => {
    console.log("exiticon clicked");
    document.body.removeChild(overlay);
});

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
});

button1.onmouseover = function() {
    button1.style.backgroundColor = "#f8f4f4";
    img.style.cursor = "pointer";
}

button1.onmouseout = function() {
    if (buttonSelected != 1) {
        button1.style.backgroundColor = "white";
    } else {
        button1.style.backgroundColor = "#ddf4ff";
    }
}

button2.onmouseover = function() {
    button2.style.backgroundColor = "#f8f4f4";
    img.style.cursor = "pointer";
}

button2.onmouseout = function() {
    if (buttonSelected != 2) {
        button2.style.backgroundColor = "white";
    } else {
        button2.style.backgroundColor = "#ddf4ff";
    }
}

button3.onmouseover = function() {
    button3.style.backgroundColor = "#f8f4f4";
    img.style.cursor = "pointer";
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


checkButton.addEventListener('click', () => {
    checkButton.style.borderBottomWidth = "2px";
    checkButton.style.marginTop = "4px";
    setTimeout(() => {
        checkButton.style.borderBottomWidth = "6px";
        checkButton.style.marginTop = "0px";
    }, 300);
});

// Append the modal to the overlay
overlay.appendChild(modal);
modal.appendChild(img);

modal.appendChild(element);
modal.appendChild(button1);
modal.appendChild(button2);
modal.appendChild(button3);
modal.appendChild(checkButton);

// Append the overlay to the body
document.body.appendChild(overlay);