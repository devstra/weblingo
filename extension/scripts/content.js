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
modal.style.width = "22%";
modal.style.height = "43%";
modal.style.fontSize = "100px !important";
//modal.innerHTML = `<h3>${translateWord} means...<h3/>`;

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

// Add event listener to the button
button1.addEventListener('click', () => {    
    console.log("button1 clicked");
});

button2.addEventListener('click', () => {
    console.log("button2 clicked");
});

button3.addEventListener('click', () => {
    console.log("button3 clicked");
});

button1.onmouseover = function() {
    button1.style.backgroundColor = "#ddf4ff";
    button1.style.border = "2px solid #1cb0f6";
    button1.style.borderBottom = "6px solid #1cb0f6";
}

button1.onmouseout = function() {
    button1.style.backgroundColor = "white";
    button1.style.border = "2px solid #e5e5e5";
    button1.style.borderBottom = "6px solid #e5e5e5";
}

button2.onmouseover = function() {
    button2.style.backgroundColor = "#ddf4ff";
    button2.style.border = "2px solid #1cb0f6";
    button2.style.borderBottom = "6px solid #1cb0f6";
}

button2.onmouseout = function() {
    button2.style.backgroundColor = "white";
    button2.style.border = "2px solid #e5e5e5";
    button2.style.borderBottom = "6px solid #e5e5e5";
}

button3.onmouseover = function() {
    button3.style.backgroundColor = "#ddf4ff";
    button3.style.border = "2px solid #1cb0f6";
    button3.style.borderBottom = "6px solid #1cb0f6";
}

button3.onmouseout = function() {
    button3.style.backgroundColor = "white";
    button3.style.border = "2px solid #e5e5e5";
    button3.style.borderBottom = "6px solid #e5e5e5";
}




// Append the modal to the overlay
overlay.appendChild(modal);
modal.appendChild(img);

modal.appendChild(element);
modal.appendChild(button1);
modal.appendChild(button2);
modal.appendChild(button3);

// Append the overlay to the body
document.body.appendChild(overlay);