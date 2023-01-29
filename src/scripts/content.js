// Modify if article elem present

const article = document.querySelector("article");
if (article) {
    const text = article.textContent;
    const filtertext = text.replace(/[^A-Za-z]+/g, " ");
    const wordArray = filtertext.trim().split(" ");
    let randWordArray = [];
    for (let i = 0; i < 10; i++) {
       randWordArray.push(wordArray[Math.floor(Math.random() * (wordArray.length))]); 
    }
    console.log(randWordArray);
    const words = text.matchAll(/[^\s]+/g);
    const sentences = text.matchAll(/[^\.]+/g);

    const wordCount = [...words].length;
    const sentenceCount = [...sentences].length;

    const readingTime = Math.round(wordCount / 200);
    const badge = document.createElement("p");
    
    badge.classList.add("color-secondary-text", "type--caption");
    badge.textContent = `${readingTime} min read (word count ${wordCount}) (sentences ${sentenceCount}, random word)`;
    
    const heading = article.querySelector("h1");
    const date = article.querySelector("time")?.parentNode;
    
    (date ?? heading).insertAdjacentElement("afterend", badge);
    }