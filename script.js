const quoteText = document.querySelector('.quote'),
quoteBtn = document.querySelector("button"),
authorName = document.querySelector('.author .name'),
soundBtn = document.querySelector('.sound'),
copyBtn = document.querySelector('.copy'),
twitterBtn = document.querySelector('.twitter')


const randomQuote = () => {
    quoteBtn.classList.add('loading')
    quoteBtn.innerText = 'Loading Quote....'
    fetch('https://api.quotable.io/random').then(res => res.json()).then(result => {
        quoteText.innerHTML = result.content    
        authorName.innerHTML = result.author
        quoteBtn.innerText = 'New Quote'
        quoteBtn.classList.remove('loading')
    })
}


soundBtn.addEventListener('click', () => {
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`)
    speechSynthesis.speak(utterance)
})

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(quoteText.innerText)
})

twitterBtn.addEventListener('click', () => {
    let twitterUrl = `https://twitter.com/home/intent/tweet?url = ${quoteText.innerText}`
    window.open(twitterUrl, "_blank")
})

quoteBtn.addEventListener('click',randomQuote)