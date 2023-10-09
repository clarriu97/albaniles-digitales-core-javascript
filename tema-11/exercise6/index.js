
let url = "https://jsonplaceholder.typicode.com/posts/1"

fetch(url)
    .then(response => {
        console.log(response.status);
        return response.json();
    })
    .then(data => console.log(`Title: ${data.title}\n\nBody: ${data.body}`))
    .catch(error => console.error(error));
