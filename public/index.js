window.onload = function () {
    refreshQuote();
}

const refreshQuote = async () => {
    var quoteEl = document.getElementById("quote");

    // Get quote via Fetch API
    let request = await fetch('./api');
    let response = await request.json();

    // Add quote to page
    quoteEl.innerText = response.quote;
}