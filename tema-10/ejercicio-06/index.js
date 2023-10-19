
text = document.getElementById("text")

url = "https://www.google.com"
const headers = new Headers();
headers.append('Cache-Control', 'no-cache');

fetch(url, {mode: 'no-cors'})
    .then((response) => {
        console.log(response);
    });