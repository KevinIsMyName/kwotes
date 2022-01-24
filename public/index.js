window.onload = function () {
    refreshQuote();
}

const refreshQuote = async () => {
    var quoteEl = document.getElementById("quote");

    // Get quote via Fetch API
    let request = await fetch('http://localhost:8080/api');
    let response = await request.json();
    console.log(response);

    // Add quote to page
    quoteEl.innerText = response.quote;
}