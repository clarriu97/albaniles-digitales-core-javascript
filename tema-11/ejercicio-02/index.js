
url = "https://www.google.com"

function fetchGoogle() {
    fetch(url, {mode: 'no-cors'})
        .then((response) => {
            console.log(response);
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        })
}

fetchGoogle();
