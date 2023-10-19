
url = "https://www.google.com"

function fetchGoogle() {
    return fetch("https://www.google.com")
        .then(response => {
            return response.text();
        })
        .catch(error => {
            throw new Error("Failed to fetch Google: " + error.message);
        });
}

// fetchGoogle().then(response => console.log(response));

module.exports = {
    fetchGoogle
};
