// Modify if article elem present
const article = document.querySelector("article");
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
}
console.log("test");