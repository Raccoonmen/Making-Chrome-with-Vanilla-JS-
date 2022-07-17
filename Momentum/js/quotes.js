const quotes = [
    {
        quote: "hello",
        author: "me",
    },
    {
        quote: "hello",
        author: "you",
    },
    {
        quote: "hello",
        author: "our",
    },
    {
        quote: "hello",
        author: "ours",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length )];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.quote;