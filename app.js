const button = document.querySelector('button')
const name = document.querySelector('h3')
const quotePage = document.querySelector('p')

const url = "https://type.fit/api/quotes"

function getQuote(){
    fetch(url)
    .then((data)=>data.json())
    .then((quote)=>{
        const randomIndex = Math.floor(Math.random()*quote.lenght)
        const randomQuote = quote[randomIndex]
        quotePage.innerHTML = randomIndex.text;
        name.innerHTML = randomQuote.author || "Unknown"
    })
}
button.addEventListener('click',getQuote)